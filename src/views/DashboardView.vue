

<template>
    <PostTable lensId = {{userlensid}} />
</template>


<script>
    import {Store} from '../store/index.js'
    import PostTable from '../components/PostTable.vue'
    import {storeToRefs} from 'pinia'
    export default {
        name: 'DashboardView',
        components: {
          PostTable
        },
        setup() {
            const store = Store()
            const {userlensid,} = storeToRefs(store)
            return {
                userlensid,
                store
            }
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

