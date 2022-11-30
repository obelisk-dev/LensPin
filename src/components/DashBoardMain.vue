<template>
    <v-card
    min-height="30vh"
    rounded="lg"
    class="bg-peas"
    elevation="10"
    >
      <v-tabs
        v-model="tab"
        bg-color="transparent"
        color="basil"
        grow
      >
        <v-tab>
          Pinned Post
        </v-tab>
        <v-tab>
          My Post
        </v-tab>
        <v-tab>
          Following
        </v-tab>

      </v-tabs> 

      <PostTable lensId = '0xecf8'/>

    </v-card>
</template>

<script>
    import PostTable from '../components/PostTable.vue'
    export default {
        name: 'DashBoardMain',
        components: {
          PostTable
        },
        data: function() {
            return {
                name: "DashBoardMain",
  

            };
        },
        mounted: function() {

        },
        methods: {

        }
    }
</script>