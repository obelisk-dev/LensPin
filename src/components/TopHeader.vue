<template>
      <v-app-bar class="">
        <v-container class="fill-height d-flex align-center">
          <h2 class="mr-16">LensPin &#127807; &#x1F3AF;</h2>
          <v-avatar
            class="mr-8 ml-16"
            size="32"
            color="grey"
          >
            <v-img
              :src= "userlensprofilepic"
            ></v-img>
          </v-avatar>
  
          <v-btn
            class=""
            v-for="link in links"
            :key="link.name"
            :to="link.route"
          >
            {{ link.name }}
          </v-btn>
  
          <v-spacer></v-spacer>
  
          <v-responsive max-width="260">
            <!-- <v-text-field
              density="compact"
              hide-details
              variant="solo"
            ></v-text-field> -->
          </v-responsive>
        </v-container>
      </v-app-bar>
  </template>
  
  <script>
    import {Store} from '../store/index.js'
    import {storeToRefs} from 'pinia'
    export default {
      setup() {
        const store = Store()
        const { userlensprofilepic } = storeToRefs(store)
        return {
            userlensprofilepic,
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
