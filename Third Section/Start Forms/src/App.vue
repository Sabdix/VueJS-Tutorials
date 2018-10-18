<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form>
                        <name v-model="fullName"></name>
                        <div class="form-group">
                            <label for="mail">Email</label>
                            <input type="email" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" class="form-control">
                        </div>
                        <div class="form-check">
                            <label for="sData">Store Data in database?
                                <input type="checkbox" class="form-check-input" v-model="storeDatabase">
                            </label>
                        </div>
                        <button class="btn btn-default" @click.prevent="submit">Submit!</button>
                    </form>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted == true">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeDatabase }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Name from './Name.vue'; 
    export default {
        data() {
            return {
                fullName: '',
                email: '',
                password: '',
                storeDatabase: null,
                submitted: false
            }
        },
        components: {
            name : Name
        },
        methods: {
            submit() {
                this.submitted = true;
            }
        }
    }
</script>

<style>
</style>
