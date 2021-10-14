import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://gorest.co.in/public/v1/users',
});


Api.defaults.headers.common['Authorization'] = '5a9314e1b70b771c6e424cc6d54db6dac6e8ae2aa635d3a6be0e9b13136672e3';

export default Api;