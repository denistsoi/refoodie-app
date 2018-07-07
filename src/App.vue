<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

#logo {
  max-width: 300px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
