<template>
    <v-container class= "ma-0 pa-0 d-flex fill-height justify-center">
    <v-responsive width="100%" max-width="800px" class= "d-flex fill-height justify-center">
        <v-sheet
        rounded="lg"
        class= "d-flex justify-center fill-height"
        
        >   
            <v-col>
            <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                    <h1 class="py-4">LensPin 🌿 🎯</h1>
                </v-col>
            </v-row>
            <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                    <div class="pa-2 text-center">
                            LensPin is an application that allows you to easily host your IPFS files on the Lens Protocol.
                            To get started, connect to the Polygon network through MetaMask and start your IPFS node using the panel on the left.
                    </div>
                </v-col>
            </v-row>
            
            <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                    <v-btn href="https://github.com/obelisk-dev/LensPin"
                            min-width="164"
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="text">
                        <v-icon>mdi-github</v-icon>
                        Github
                    </v-btn>
                </v-col>
            </v-row>

            <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                    <v-btn href="https://lenspin.xyz"
                            min-width="164"
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="text">
                        
                        Learn More
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
            
        </v-sheet>
        
    </v-responsive>
</v-container>
  
</template>

<script>
    export default {
        name: 'HomeView',
        components: {

        },
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        methods: {

        }
    }
</script>