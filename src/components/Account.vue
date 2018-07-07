<template>

</template>

<script>
import ApiClient from '../lib/apiClient';
const api = new ApiClient({ endpoint: 'http://localhost:3000/api'})

export default {
  name: "Account",
  data: () => ({
    account: null
  }),
  methods: {
    fetchData: function (userId) {
      api.retrieve(`user`, userId).then(data => {
        this.account = data.account;
      });
    }
  },
  mounted()  {
    const userId = 1
    this.fetchUserData(userId);
  }
}
</script>