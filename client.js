const axios = require('axios')

axios.post('http://localhost:3000/register', {
  login: 'rNewghServher',
  password: undefined
})
.then(function (response) {
  // console.log(response.data);
  console.log(response.data.description);
})
.catch(function (error) {
  console.log(error);
});