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
                        <v-text-field v-model="username" label="User Name"></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password"></v-text-field>

                        <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

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
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: ''
        };
    },
};
</script>
  
<style scoped>
</style>