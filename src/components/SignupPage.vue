<template>
    <div>
        <v-container>
            <h1>Project management app</h1>
            <v-card variant="elevated" color="indigo">
                <v-card-item>
                    <v-card-title>SIGNUP</v-card-title>
                </v-card-item>
                <v-card-text>
                    <v-form fast-fail>
                        <v-text-field v-model="userEmail" label="Email"></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                        <v-text-field v-model="repeatPassword" label="Repeat password" type="password"></v-text-field>

                        <v-btn type="submit" color="primary" block class="mt-2" v-on:click.prevent="signup()">Sign in</v-btn>

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
    name: 'SignupPage',
    data() {
        return {
            userEmail: '',
            password: '',
            repeatPassword: ''
        };
    }, methods: {
        async signup() {
            if (this.userEmail == "" || this.password == "") {
                console.log("userEmail and Password can not be empty")
            } else if (this.password != this.repeatPassword) {
                console.log("Passwords are not the same")
            }
            else {
                const { data } = await axios.post(
                    "http://localhost:3000/users/signup",
                    {
                        userEmail: this.userEmail,
                        password: this.password,
                    }
                );
                console.log(data)
            }
        }
    },


};
</script>
  
<style scoped></style>