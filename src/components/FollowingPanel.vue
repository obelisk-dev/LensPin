<template>
    <v-card>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                    Lens Handle
                    </th>
                    <th class="text-left">
                    Address
                    </th>
                    <th>
                    # of Post
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in following"
                    :key="item.handle"
                >
                    <td>{{ item.handle }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.posts }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<script>
    import {Store} from '../store/index.js'
    //import {storeToRefs} from 'pinia'
    export default {
        name: 'FollowingPanel',
        components: {

        },
        setup() {
        const store = Store()
        const { queryDefaultProfile } = store
        return {
                queryDefaultProfile,
                store
            }
        },
        data: function() {
            return {
                name: "FollowingPanel",
                desserts: [
                    {
                        handle: 'Frozen Yogurt',
                        address: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                    },
                ],

            };
        },
        mounted: function() {
            this.queryDefaultProfile()
        },
        methods: {
            
        }
    }
</script>