import { CID } from 'multiformats/cid'
import * as helpers from './helperFunctions.js'
import {Store} from '../store/index'

class Publication {
    constructor(item) {
        const store = Store()
        this.id = item.id
        this.appId = item.appId
        this.createdOn = item.createdAt
        this.numMedia = 0
        this.numIpfsMedia = 0
        this.numMedia = item.metadata.media.length
        this.hasMedia = this.numMedia > 0
        this.hasIpfsMedia = false
        this.ipfsMediaArray = []
        this.ipfs = store.ipfs
        this.isPinned = 'loading'
        if (this.hasMedia) {
            let i = 0
            let mediaArray = item.metadata.media
            while (i < this.numMedia) {
                if(helpers.constainsIpfs(mediaArray[i].original.url)) {
                    let mediaObj = {}
                    mediaObj.url = mediaArray[i].original.url
                    mediaObj.type = mediaArray[i].original.mimeType
                    mediaObj.cid = helpers.getIpfsHash(mediaArray[i].original.url)
                    mediaObj.hostUrl = helpers.formIpfsUrl(mediaObj.cid)
                    this.ipfsMediaArray.push(mediaObj)
                    this.numIpfsMedia++
                    this.hasIpfsMedia = true  
                }
                i++
            }
        }
    }
    async pinMedia() {
        if (!this.hasIpfsMedia) return 
        for await (let item of this.ipfsMediaArray) {
            for await (const buf of this.ipfs.get(item.cid)) {
                console.log(buf)
              }
            await this.ipfs.pin.add(CID.parse((item.cid)), {recursive:false, progress:true})
        }
    }
    async checkPinned() {
        if (!this.hasIpfsMedia) {
            this.isPinned = false
            return false
        }
        const pinnedArray = []
        for await (const { cid } of this.ipfs.pin.ls()) {
            pinnedArray.push(cid.toString())
        }
        for (const item of this.ipfsMediaArray) {
            if (!pinnedArray.includes(item.cid)) {
                this.isPinned = false
                return false
            }
        }
        this.isPinned = true
        return true
    }
    async rmPin() {
        for await (let item of this.ipfsMediaArray) {
            try{
                await this.ipfs.pin.rm(CID.parse((item.cid)), {recursive:false})
            } catch(e){
                console.log(e)
            }
        }
        return
    }
}

export default Publication

