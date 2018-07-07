<template>
  <div>
    <h1>helo</h1>
    <div><span>Food: </span><span>{{ items }}</span></div>
  </div>
</template>

<script>
import ApiClient from '../lib/apiClient';
const api = new ApiClient({ endpoint: 'http://localhost:3000/api/'})

// import 
export default {
  name: 'Resources',
  data: () => {
    return {
      items: null
    }
  },
  components: {},
  methods: {
    fetchData: async function() {
      const self = this;

      const food = await api.list('food');
      console.log(food);
      this.items = food;

      // fetch('http://localhost:3000/api/food')
      //   .then(response => response.json())
      //   .then(data => {
      //     self.items = data;
      //   })
      //   .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>
</style>