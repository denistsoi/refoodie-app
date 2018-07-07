<template>
  <div>
    <div v-if="loading">
      <md-progress-bar class="md-accent" md-mode="query"></md-progress-bar>
    </div>

    <md-button @click="fetchData" >Fetch more resources</md-button>

    <div>
      <md-card v-for="item in items" :key="item.id">
        <md-card-header>
          <div class="md-title">{{ item.name }}</div>
          <div class="md-subhead">{{ item.description }}</div>
        </md-card-header>
        <md-card-media md-medium>
          <img :src="`${item.image}`" v-if="item.image" />
        </md-card-media>

        <md-card-content md-alignment="left">
          <span>{{ item.location }}</span>
        </md-card-content>
        
        <md-card-actions>
          <md-button class="md-primary" v-class="item.stats === 'PENDING' ? 'md-primary' : ''" @click="reserve(item)" :disabled="item.status === 'COLLECTED' ">Reserve</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import ApiClient from '../lib/apiClient';
const api = new ApiClient({ endpoint: 'http://localhost:3000/api'})

// import 
export default {
  name: 'Resources',
  data: () => {
    return {
      items: null,
      loading: false,
    }
  },
  components: {},
  methods: {
    fetchData: function () {
      // try to move use => function for this
      this.loading = true;
      api.list('food').then(data => {
        this.items = data.food;
        
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      })
    },
    reserve: function(item) {
      // console.log(item);
      api.update('food', { id: item.id })
        .then(response => { 
          console.log(response);
          
          // return response
        }).then(() => {
          console.log('do this');
          this.fetchData()
        });
      
      
    }
  },
  mounted() {
    this.loading = true;
    this.fetchData();
  }
}
</script>

<style>
.md-title,
.md-subhead {
  text-transform: capitalize;
}
.md-card {
  height: 380px;
  width:  320px;
  margin: 4px;
  display: inline-block;
}

.md-card-header {
  max-height: 120px;
}

.md-card-media {
  height: 180px;
  overflow: hidden;
}
</style>