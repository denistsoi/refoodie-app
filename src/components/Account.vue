<template>
  <div class="account">
    <div v-if="account">
      <md-card>
        <md-card-header>
          <div class="md-title">{{ account.name }}</div>
          <div class="md-subhead">Joined: {{ humanize(account.createdAt) }}</div>

        </md-card-header>
        
        <md-card-media v-if="account.image" >
          <img
            :src="`${account.image}`" 
            />
        </md-card-media>
        <md-card-content>
          <div class="contact-buttons divider">
              <label>Contact: </label>
              
              <a v-bind:href="'tel:'+ account.contact">
                <md-button class="md-icon-button">
                  <md-icon>phone</md-icon>
                </md-button>
              </a>
              
              <md-button class="md-icon-button">
                <md-icon>sms</md-icon>
              </md-button>
          </div>
          <label>Location: </label><span>{{ account.location }}</span>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import ApiClient from '../lib/apiClient';
import moment from 'moment';
const api = new ApiClient({ endpoint: 'http://localhost:3000/api'})

export default {
  name: "Account",
  data: () => ({
    account: null
  }),
  methods: {
    fetchData: function (userId) {
      const data = { id: userId };

      api.retrieve(`user`, userId, data).then(data => {
        this.account = data.user;
      });

    },

    humanize: (dateString) => {
      return moment(dateString).fromNow();
    }
  },
  mounted()  {
    const userId = 1
    this.fetchData(userId);
  }
}
</script>

<style>

.account {
  margin-top: 10px;
}

.account .md-card {
  max-width: 80%;
  margin: 0 auto;
}

.account .md-card-media  img {
  height: 500px;
  width: auto;
}

.contact-buttons {
  line-height: 40px;
}

.divider {
  margin-bottom: 10px;
}


</style>