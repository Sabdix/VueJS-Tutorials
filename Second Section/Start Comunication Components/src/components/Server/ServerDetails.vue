<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details: {{ status }}</p>
    </div>

</template>

<script>
    import { eventBus } from './../../main.js';
    export default {
        data: function() {
            return {
                status: ''
            };
        },
        created() {
            eventBus.$on('showStatus', (status) => {
                this.status = status;
            });
        }
    }
</script>

<style>

</style>
