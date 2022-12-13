<template>
    <v-sheet rounded="lg" class ="fill-height" >
    <v-table class="pt-4" density="compact" fixed-header
    height="100%">
    <thead>
      <tr>
        <th class="text-left">
          PostId
        </th>
        <th class="text-left">
          Application
        </th>
        <th class="text-left">
          # Media
        </th>
        <th class="text-left">
          Pin to IPFS Node
        </th>
        <th class="text-left">
          Remove
        </th>
      </tr>
    </thead>
    <tbody>
        <template
        v-for="_post in publications"
        :key="_post.id">
            <!-- <tr
            >
                <td>{{ post.id }}</td>
                <td>{{ post.appId }}</td>
                <td>{{ post.numMedia }}</td>
                <td>{{ post.isPinned + render }}</td>
            </tr> -->
            <PostRow :post = _post  />
        </template>
    </tbody>
  </v-table>
</v-sheet>
</template>

<script>
    import {Store} from '../store/index.js'
    import {storeToRefs} from 'pinia'
    import PostRow from '../components/PostRow.vue'
    export default {
        name: 'PostTable',
        components: {
            PostRow
        },
        props: {
            lensId: String
        },
        setup() {
        const store = Store()
        const { address, name, provider, web3Network, web3Connected, userlenshandle, userlensid, defaultLensPost, isOnline } = storeToRefs(store)
        const { initWeb3, setState, getPublicationsById } = store
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
                store
            }
        },
        data: function() {
            return {
                publications:[]

            };
        },
        mounted: function() {
            if (this.isOnline) {
                this.getPublications(this.userlensid)
            } 
        },
        watch: {
            isOnline(newValue) {
                if(newValue) {
                    this.getPublications(this.userlensid)
                }
            }

        },
        methods: {
            async getPublications(lensId = this.userlensid) {
                this.publications = await this.getPublicationsById(lensId)
            }
        }
    }
</script>