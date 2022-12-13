<template>
    <v-card
    min-height="30vh"
    rounded="lg"
    class="bg-peas ml-5 mr-5 mb-5"
    elevation="8"
    >
    <v-banner class="bg-basil font-weight-bold text-lg-h6">WEB3 STATUS</v-banner>
    <template v-if="this.web3Connected">
        <v-list class="bg-peas">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="bg-peas font-weight-bold">Status</v-list-item-title>
                    <v-list-item-subtitle v-if="this.web3Connected">Connected</v-list-item-subtitle>
                    <v-list-item-subtitle v-else>Not Connected</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="bg-peas font-weight-bold">Address</v-list-item-title>
                    <v-list-item-subtitle>{{ this.address }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="bg-peas font-weight-bold">Network</v-list-item-title>
                    <v-list-item-subtitle>{{ this.web3Network }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="bg-peas font-weight-bold">Lens Handle</v-list-item-title>
                    <v-list-item-subtitle>{{ this.userlenshandle }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="bg-peas font-weight-bold">Lens ID</v-list-item-title>
                    <v-list-item-subtitle>{{ this.userlensid }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

        </v-list>
        </template>
        <template v-else-if="!this.web3Connected">
            <v-btn md-alignment="center" color="darkgrey" class="mt-4 ml-2" @click="connectToWeb3()">Connect MetaMask</v-btn>
        </template>
    </v-card>
</template>

<script>
    import {Store} from '../store/index.js'
    import {storeToRefs} from 'pinia'
    export default {
        name: 'Web3SidePanel',
        components: {
    },
    setup() {
        const store = Store()
        const { address, name, provider, web3Network, web3Connected, userlenshandle, userlensid } = storeToRefs(store)
        const { initWeb3, setState } = store
        return {
            name,
            address,
            provider,
            web3Network,
            web3Connected,
            userlenshandle,
            userlensid,
            initWeb3,
            setState,
            store
        }
    },
    data: function() {
        return {

        };
    },
    mounted: function() {
        this.setState()
    },
    methods: {
        async connectToWeb3() {
            this.initWeb3()
        }
    }
  }

</script>