<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please Select a Server</p>
        <p v-else>Server Details: {{ server.status }}</p>
        <hr>
        <button v-if="server" @click="chNormal">Change to Normal</button>
    </div>

</template>

<script>
    import { eventBus } from './../../main.js';
    export default {
        data: function() {
            return {
                server: null,
            };
        },
        created() {
            eventBus.$on('showStatus', (server) => {
                this.server = server;
            });
        },
        methods: {
            chNormal() {
                this.server.status = 'Normal';
            }
        }
    }
</script>

<style>

</style>
