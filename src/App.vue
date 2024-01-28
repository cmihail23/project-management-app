<template>
  <div hidden>
    <LoginForm />
  </div>
  <div >
    <MainPage />
  </div>
</template>

<script>

import LoginForm from './components/LoginForm.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    LoginForm,
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 60px; */
}
</style>
