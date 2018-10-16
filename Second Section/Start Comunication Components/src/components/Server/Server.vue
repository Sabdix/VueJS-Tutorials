<template>
    <div @click="showStatus">
        Server #{{ server.id }}
    </div>
</template>

<script>
    import { eventBus } from './../../main.js';
    export default {
        props: {
            server: Object
        },
        methods: {
            showStatus() {
                eventBus.$emit('showStatus', this.server.status);
            }
        }
    }
</script>

<style>

</style>
