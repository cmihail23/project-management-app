<template>
  <v-app>
    <v-toolbar app color="primary">
      <v-toolbar-items>
        <v-btn text href="/projects">Projects</v-btn>
        <v-btn text href="/employees">Employees</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn text href="/">Logout</v-btn>
    </v-toolbar>
    <v-content>
      <router-view :key="$route.path" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
