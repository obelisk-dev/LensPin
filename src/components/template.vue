<template>
    {{this.name}}
</template>

<script>
    export default {
        name: 'template',
        components: {

        },
        data: function() {
            return {
                name: "template",
                id: 1,

            };
        },
        mounted: function() {
            this.newMethod()
        },
        methods: {
            async newMethod() {
                try {
                    console.log(this.name, this.id)
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>