<template>
    <tr>
        <td>{{ post.id }}</td>
        <td>{{ post.appId }}</td>
        <td>{{ post.numIpfsMedia }} <span v-if="post.numIpfsMedia > 0"><a :href=externalUrl target="_blank">OPEN</a></span> </td>
        <td v-if="(!pinned & post.numIpfsMedia>0 & !pinClicked)"> 
            <v-btn @click="buttonPin" icon="mdi-download" variant="text" size="medium" color="green" ></v-btn>
        </td>
        <td v-else-if="(!pinned & post.numIpfsMedia>0 & pinClicked)"> 
            <v-progress-circular
                color="basil"
                indeterminate
                :size="18"
                :width="2"
                class=""
                ></v-progress-circular>
        </td>
        <td v-else-if="pinned"> <v-icon size="large" color="green" icon="mdi-check"></v-icon> </td>

        <td v-if="pinned"> <v-btn @click="buttonRm" variant="text" size="medium" color="red" icon="mdi-close"></v-btn> </td>

    </tr>
</template>

<script>
    import {Store} from '../store/index.js'
    import {storeToRefs} from 'pinia'
    // import Publication from '../helpers/Post.js'
    export default {
        name: 'PostRow',
        components: {
            
        },
        props: {
            post: Object
        },
        setup() {
            const store = Store()
            const { address, name, provider, web3Network, web3Connected, userlenshandle, userlensid, defaultLensPost, isOnline } = storeToRefs(store)
            const { initWeb3, setState, getPublicationsById, getStats } = store
            return {
                name,
                address,
                provider,
                web3Network,
                web3Connected,
                userlenshandle,
                userlensid,
                defaultLensPost,
                isOnline,
                initWeb3,
                setState,
                getPublicationsById,
                getStats,
                store
            }
        },
        data: function() {
            return {
                pinned:'loading',
                externalUrl:'',
                pinClicked:false
            }
        },
        mounted: function() {
           this.loadPinned()
           this.setExternalUrl()
        },
        watch: {

        },
        methods: {
            async loadPinned() {
                this.pinned = await this.post.checkPinned()
            },
            async buttonPin() {
                this.pinClicked = true
                await this.post.pinMedia()
                this.loadPinned()
                this.getStats()
                this.pinClicked = false
            },
            async buttonRm(){
                await this.post.rmPin()
                this.loadPinned()
            },
            setExternalUrl() {
                if(this.post.hasIpfsMedia) {
                    this.externalUrl = this.post.ipfsMediaArray[0].hostUrl
                }
            }
        }
    }
</script>