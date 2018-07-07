<template>
  <div>
    <md-tabs md-sync-route class="md-accent" md-alignment="right">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="Resources" to="/resources"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>