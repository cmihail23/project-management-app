<template>
    <div>
        <v-container>
            <h1>Project management app</h1>
            <v-card variant="elevated" color="indigo">
                <v-card-item>
                    <v-card-title>Login</v-card-title>
                </v-card-item>
                <v-card-text>
                    <v-form fast-fail>
                        <v-text-field v-model="userEmail" label="Email"></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password"></v-text-field>

                        <v-btn type="submit" color="primary" block class="mt-2" v-on:click.prevent="login()">Sign in</v-btn>

                    </v-form>
                    <div class="mt-2">
                        <p class="text-body-2">Don't have an account? <a href="#">Sign up!</a></p>
                    </div>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: 'LoginPage',
    data() {
        return {
            userEmail: '',
            password: ''
        };
    }, methods: {
        async login() {
            if (this.userEmail == "" || this.password == "") {
                console.log("userEmail and Password can not be empty")
            } else {
                try {
                    const { data } = await axios.post(
                        "http://localhost:3000/users/login",
                        {
                            userEmail: this.userEmail,
                            password: this.password,
                        }
                    )
                    console.log(data)
                    this.$router.push("/home")
                } catch (error) {
                    console.log(error)
                    alert("Problema la log-in:" + error)
                }
            }
        }
    },


};
</script>
  
<style scoped></style>