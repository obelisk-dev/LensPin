<template>
    <v-card
    min-height="30vh"
    rounded="lg"
    class="bg-peas mb-5 ml-5 mr-5"
    elevation="8"
    >
        <v-banner class="bg-basil font-weight-bold text-lg-h6">IPFS STATUS</v-banner>
            <template v-if="this.isOnline">
            <v-list class="bg-peas font-weight-bold">

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="bg-peas font-weight-bold">Status</v-list-item-title>
                        <v-list-item-subtitle v-if="this.isOnline">Connected</v-list-item-subtitle>
                        <v-list-item-subtitle v-else>Not Connected</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="bg-peas font-weight-bold">ID</v-list-item-title>
                        <v-list-item-subtitle>{{ this.id }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="bg-peas font-weight-bold">Files Pinned</v-list-item-title>
                        <v-list-item-subtitle>{{ this.repoItems }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="bg-peas font-weight-bold">Total size of Pinned Files</v-list-item-title>
                        <v-list-item-subtitle>{{ (Number(this.repoSize) / (1024*1024)).toFixed(2) }} MB</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
            </template>
            <template v-else-if="!this.isOnline & !this.buttonClicked">
                <v-btn md-alignment="center" color="darkgrey" class="mt-4 ml-2" @click="getIpfsNodeInfo()">Start</v-btn>
            </template>
            <template v-else>
                <v-progress-circular
                color="basil"
                indeterminate
                :size="121"
                :width="7"
                class="mt-4 ml-4 mb-4"
                ></v-progress-circular>
            </template>
    </v-card>

</template>

<script>
    import {Store} from '../store/index.js'
    import {storeToRefs} from 'pinia'
    export default {
        name: 'IpfsSidePanel',
        components: {
    },
    setup() {
        const store = Store()
        const { ipfs, id, isOnline, repoSize, repoItems } = storeToRefs(store)
        const { startIPFS } = store
        return {
            ipfs,
            id,
            isOnline,
            startIPFS,
            repoItems,
            repoSize,
            store
        }
    },
    data: function() {
        return {
            status: "Connecting to IPFS...",
            agentVersion: "",
            buttonClicked: false

        };
    },
    mounted: function() {

    },
    methods: {
        async getIpfsNodeInfo() {
            this.buttonClicked = true
        try {
            await this.startIPFS();
        } catch (err) {
            console.log(err)
        }
        }
    }
  }

</script>