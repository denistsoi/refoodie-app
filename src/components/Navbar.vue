<template>
  <div>
    
    <md-tabs md-sync-route class="md-primary" md-alignment="right">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="Resources" to="/resources"></md-tab>
      <md-tab id="tab-account" md-label="Account" to="/account"></md-tab>
    </md-tabs>
    <!-- <md-app-toolbar>
      <md-tabs md-sync-route class="md-primary" md-alignment="right">
        <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
        <md-tab id="tab-pages" md-label="Resources" to="/resources"></md-tab>
      </md-tabs>
    </md-app-toolbar> -->
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>