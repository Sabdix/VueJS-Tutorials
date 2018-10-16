<template>
    <li @click="showStatus" class="list-group-item">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from './../../main.js';
    export default {
        props: {
            server: Object
        },
        methods: {
            showStatus() {
                eventBus.$emit('showStatus', this.server);
            }
        }
    }
</script>

<style>

</style>
