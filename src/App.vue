
<template>
  <v-app id="inspire">
    <TopHeader/>
      <v-row class="">
        <v-col cols="2">
          <v-sheet class=" pt-10" elevation = '10' outlined height = "100%">

            <IpfsSidePanel/>
            <Web3SidePanel/>

          </v-sheet>
        </v-col>
        <v-col class="pl-6 pr-10 pt-10">
          <router-view class="mt-16"></router-view>
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
import TopHeader from '/src/components/TopHeader.vue'
import IpfsSidePanel from '/src/components/IpfsSidePanel.vue'
import Web3SidePanel from '/src/components/Web3SidePanel.vue'
  export default {
    name: 'AppView',
    components: {
      TopHeader,
      IpfsSidePanel,
      Web3SidePanel

    },
    data: function() {
    return {

      };
    },
    mounted: function() {

    },
    methods: {

    }
  }
</script>
