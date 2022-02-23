const axios = require('axios')

axios.post('http://localhost:3000/book', {

})
.then(function (response) {
  console.log(response.data,{name: 'lol'});
})
.catch(function (error) {
  console.log(error);
});