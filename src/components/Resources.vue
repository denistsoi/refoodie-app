<template>
  <div class="resources">
    <div v-if="loading">
      <md-progress-bar class="md-accent" md-mode="query"></md-progress-bar>
    </div>

    <div class="buttons">
      <md-button @click="fetchData" >Fetch more resources</md-button>
      
      <!-- <md-button><input type="file" accept="image/*" capture /></md-button> -->

      <md-button class="md-icon-button md-raised md-primary" 
        @click="addItem">
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div class="list">
      <md-card v-for="item in items" :key="item.id">
        <md-card-header>
          <div class="md-title">{{ item.name }}</div>
          <div class="md-subhead">{{ item.description }}</div>
        </md-card-header>
        <md-card-media md-medium>
          <img 
            :src="`${item.image}`" 
            v-bind:class="item.status === 'COLLECTED' ? 'inactive' : '' " 
            v-if="item.image" 
            />
        </md-card-media>

        <md-card-content md-alignment="left">
          <span class="location" >{{ item.location }}</span>
          <md-button class="location-btn" to="/account/"> 
            <span class="md-subhead">view more info</span>
          </md-button>
        </md-card-content>

        
        <md-card-actions>
          <md-button 
            class="md-primary" 
            v-bind:class="item.stats === 'PENDING' ? 'md-primary' : ''" 
            @click="reserve(item)" 
            :disabled="item.status === 'COLLECTED' ">Reserve</md-button>
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
          // console.log(response);
          // return response
        }).then(() => {
          this.fetchData()
        });
    },
    addItem: function() {
      console.log('add item');
      
    },
    goToPage: (pageId) => {
      console.log(pageId);
      // router.push({path: `/account/${pageId}` })
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
.resources .md-card {
  height: 400px;
  width:  320px;
  margin: 4px;
  display: inline-block;
}

.resources .md-card-content {
  padding-bottom: 0;
}

.resources .location {
  margin-right: 4px;
}

.resources .location-btn {
  margin: 0;
}

.md-card-header {
  max-height: 120px;
}

.resources .md-card-media {
  height: 180px;
  overflow: hidden;
}

.buttons,
.list {
  padding-top: 10px;
}
</style>