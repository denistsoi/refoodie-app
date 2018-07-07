const axios = require('axios');

class ApiClient {
  constructor(props) {
    this.endpoint = props.endpoint;
  }

  list(resource) {
    console.log(`list ${resource}`);
    return axios
      .get(this.endpoint + resource)
      .then(response => response.data)
      .catch(err => {
        console.log(err)
      });
  }

  create(resource, data) {
    console.log(`create ${resource}, ${data}`);
    return axios  
      .post(this.endpoint + resource, data) 
      .then(response => response.data)
      .catch(err => {
        console.log(err)
      });
  }

  update(resource, data) {
    console.log(`update ${resource}, ${data}`);
    return axios
      .put(this.endpoint + resource, data)
      .then(response => response.data)
      .catch(err => {
        console.log(err)
      });

  }

  // retrieve(resource) {
  // }
  // delete(resource) {
  // }
}

export default ApiClient;