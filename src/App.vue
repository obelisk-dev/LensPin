
<template>
  <v-app id="inspire">
    <v-layout>
    <TopHeader/>
          <v-navigation-drawer
            floating
            v-model="this.sidePanelShow"
            class='pt-10' elevation = '10' outlined height = "100%">
            <IpfsSidePanel/>
            <Web3SidePanel/>
          </v-navigation-drawer>
          <v-main>
            <!-- mobile alert -->
            
            <!-- beta alert -->
            <v-alert
              v-model="betaWarning"
              density="compact"
              type="warning"
              closable
              close-label="Close Alert"
            >
            LensPin is currently in development.  Feedback is welcomed!
            </v-alert>

            <router-view class="ma-2"></router-view>
            
          </v-main>
        </v-layout>
  </v-app>
</template>

<script>
import TopHeader from '/src/components/TopHeader.vue'
import IpfsSidePanel from '/src/components/IpfsSidePanel.vue'
import Web3SidePanel from '/src/components/Web3SidePanel.vue'
import {Store} from './store'
import {storeToRefs} from 'pinia'

  export default {
    setup() {
        const store = Store()
        const { userlensprofilepic,sidePanelShow, Mobile } = storeToRefs(store)
        const { checkIfMobile } = store
        checkIfMobile()
        return {
            userlensprofilepic,
            sidePanelShow,
            Mobile,
            checkIfMobile,
            store
        }
      },
    name: 'AppView',
    components: {
      TopHeader,
      IpfsSidePanel,
      Web3SidePanel

    },
    data: function() {
    return {
        mobileWarning: this.Mobile,
        betaWarning: true
      };
    },
    mounted: function() {

    },
    methods: {

    }
  }
</script>
