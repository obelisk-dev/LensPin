import {defineStore}  from 'pinia'
import {create} from 'ipfs-core'
import { ethers } from "ethers"
import { markRaw } from 'vue'
import { apolloClient } from '../utils/ApolloClient';
import { gql } from '@apollo/client/core'
import * as helpers from '../utils/helperFunctions'
import * as ApolloRequest from '../utils/ApolloRequest'
import Publication from '../utils/Post.js'
import { useMobileDetection } from "vue3-mobile-detection";


export const Store = defineStore('Store', {
  state: () => ({
    Mobile:true,
    sidePanelShow: true,
    provider: '',
    address: '',
    signer: '',
    ipfs:'',
    id:'',
    isOnline: false,
    handle:'',
    ipfsStats:[],
    web3Connected:'',
    web3Network:'',
    userlensid:'',
    userlenshandle:'',
    userlensprofilepic:'',
    defaultLensPost:[],
    repoSize:0,
    repoItems:0

  }),
  getters: {
    getPostComments: (state) => {
      console.log(state)
    }
  },
  actions: {
    //mobile detection
    checkIfMobile() {
      const { isMobile } = useMobileDetection()
      this.Mobile = isMobile()
      this.sidePanelShow = !this.Mobile

    },
    //web3actions
    async setState() {
      try {
        window.ethereum.on('accountsChanged', () => {
          this.setState()
        })
        window.ethereum.on('chainChanged', () => {
          this.setState()
        })
        const provider = markRaw(new ethers.providers.Web3Provider(window.ethereum))
        const signer = await provider.getSigner()
        const addr = await signer.getAddress()
        this.provider = provider
        this.address = addr
        this.signer = signer
        const network = await this.provider.getNetwork()
        if (network.name && (network.name == 'matic' || network.name == 'MATIC')) {
          this.web3Connected = true
          this.web3Network = 'MATIC'
          this.queryDefaultProfile()
        } else {
          this.web3Network = 'WRONG NETWORK'
          this.web3Connected = true
        }
      } catch(err){
        console.log(err)
        this.web3Connected = false
      }
    },
    async web3PopUp() {
      window.ethereum.enable()
    },
    async initWeb3() {
      await this.web3PopUp()
      this.setState()
      
    },
    //ipfsactions
    async startIPFS() {
      try { 
        this.ipfs = await create({ repo: 'lens' })
        console.log('here', this.ipfs)
        const {id} = await this.ipfs.id()
        this.id = id
        this.isOnline = this.ipfs.isOnline()
        this.getStats()
      } catch (err) {
        console.log('e',err)
      }
    },
    async getStats() {
      const stats = await this.ipfs.repo.stat()
      console.log(stats)
      this.repoSize = stats.repoSize
      this.repoItems = stats.numObjects
    },
    flipNavBarVis() {
      this.sidePanelShow = !this.sidePanelShow
    },
    async garbageCollect(){
      for await (const res of this.ipfs.repo.gc()) {
        console.log(res)
      }
    },
    async queryDefaultProfile() {
      const query = ApolloRequest.defaultProfileRequest
      const result = await apolloClient.query({
        query: gql(query),
        variables: {
          request: {
             ethereumAddress: this.address
          },
        },
      })
      if (result.data.defaultProfile) {
        this.userlenshandle = result.data.defaultProfile.handle
        this.userlensid = result.data.defaultProfile.id
        let picture = result.data.defaultProfile.picture.original.url
        picture = helpers.getIpfsHash(picture)
        this.userlensprofilepic = helpers.formIpfsUrl(picture)
      }

      return(this.userlensid, this.userlenshandle)
      
    },

    async getPublicationsById(lensId) {
      const query = ApolloRequest.getPublicationRequest
      const result = await apolloClient.query({
        query: gql(query),
        variables: {
          request: {
            profileId: lensId,
            publicationTypes: ['POST', 'COMMENT']
          },
        },
      })
      let postArray = []
      let i = 0
      while (i < result.data.publications.items.length) {
        const item = result.data.publications.items[i]
        const _post = await new Publication(item, this.ipfs)
        postArray.push(_post)
        i++
      }
      this.defaultLensPost = postArray
      return postArray
    }

  }
})

