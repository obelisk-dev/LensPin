<template>
      <v-app-bar>
        <v-app-bar-nav-icon @click="this.flipNavBarVis()"></v-app-bar-nav-icon>
          
          <v-row v-if="!this.Mobile">
            <v-col >
              <h2>LensPin &#127807; &#x1F3AF;</h2>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-right mr-4">
            <v-btn
              class="pl-2 justify-end"
              v-for="link in links"
              :key="link.name"
              :to="link.route"
            >
              {{ link.name }}
            </v-btn>

            <v-avatar
              
              size="32"
              color="black"
              class="justify-end"
            >
              <v-img
              class=""
                :src= "userlensprofilepic"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row v-else>
          <h2 class="px-2" >LensPin &#127807; &#x1F3AF;</h2>
        </v-row>
     
      </v-app-bar>
  </template>
  
  <script>
    import {Store} from '../store/index.js'
    import {storeToRefs} from 'pinia'
    export default {
      setup() {
        const store = Store()
        const { userlensprofilepic,sidePanelShow, Mobile } = storeToRefs(store)
        const { flipNavBarVis} = store
        return {
            userlensprofilepic,
            Mobile,
            sidePanelShow,
            flipNavBarVis,
            store
        }
      },
      name: 'TopHeader',
      data: () => ({
        links: [
        {name:'Home', route:'/'},
        {name:'My Post',route:'/post'},
        // {name:'Following',route:'/friends'},
        // {name:'Pinned Items',route:'/messages'},
        // {name:'Settings',route:'/settingsS'},
        ],
      }),
    }
  </script>
