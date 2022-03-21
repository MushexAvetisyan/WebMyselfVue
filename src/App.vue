<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Vue Basics</router-link>
      <router-link to="/CLI">Vue CLI Webpack</router-link>
      <router-link to="/Components">Components</router-link>
      <router-link to="/directives">Directives</router-link>
      <router-link to="/FiltersMixins">Filters and Mixins</router-link>
      <router-link to="/Forms">Working with Forms</router-link>
      <router-link to="/vuelidate">Form validation with vuelidate</router-link>
      <router-link to="/Routing">Routing with vue-router</router-link>
      <router-link to="/server">Working with the server with vue-resource</router-link>
      <router-link to="/vuex">Working with data with vuex</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration-line: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
