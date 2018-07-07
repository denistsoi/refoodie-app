<template>
  <div class="hello">
    <img id="logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      This is a site for donating your unwanted items <br>
      to servicing underrepresented communities in Hong Kong.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
