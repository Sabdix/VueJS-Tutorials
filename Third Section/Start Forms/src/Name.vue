<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input class="form-control" type="text" :value="firstName" @input="inputs(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input class="form-control" type="text" :value="lastName" @input="inputs(false, $event)">
        </div>
    </div>    
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            inputs(isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' ' + event.target.value;
                }
                this.value = name;
                this.$emit('input', this.value);
            }

        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                 return this.value.split(" ")[1];
            }
        }
    }
</script>

<style>
</style>
