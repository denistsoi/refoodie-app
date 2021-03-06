const axios = require('axios');

class ApiClient {
  constructor(props) {
    this.endpoint = props.endpoint;
  }

  list(resource) {
    console.log(`list ${resource}`);
    return axios
      .get(`${this.endpoint}/${resource}/`)
      .then(response => response.data)
      .catch(err => {
        console.error(err);
      });
  }

  create(resource, data) {
    console.log(`create ${resource}, ${data}`);
    return axios  
      .get(`${this.endpoint}/${resource}/`, data) 
      .then(response => response.data)
      .catch(err => {
        console.error(err);
      });
  }

  update(resource, data) {
    console.log(`update ${resource}, ${data}`);
    const id = data.id;

    return axios({
        method: 'put',
        url: `${this.endpoint}/${resource}/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data,
      })
      .then(response => response.data)
      .catch(err => {
        console.error(err);
      });
  }

  retrieve(resource, id, data) {
    console.log(`retrieve ${resource}`, id);
    const url = `${this.endpoint}/${resource}/${id}`;
    console.log(url);
    return axios({
        method: 'get',
        url: `${this.endpoint}/${resource}/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        console.log(response);
        return response.data
      })
      .catch(err => {
        console.error(err);
      })
  }

  // delete(resource) {
  // }
}

export default ApiClient;