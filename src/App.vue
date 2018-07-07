<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
  <!-- <md-app md-waterfall md-mode="overlap">
    <md-app-toolbar class="md-primary md-large">
      <div class="md-toolbar-row">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>

        <span class="md-title">My Title</span>
      </div>
    </md-app-toolbar>  

    <md-content>
      <router-view></router-view>
    </md-content>
  </md-app> -->
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  },
}
</script>

<style>

#logo {
  max-width: 300px;
}
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
