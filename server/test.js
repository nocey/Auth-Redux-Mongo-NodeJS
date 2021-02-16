const axios = require('axios');

const fn = async () => {
   await axios.get('http://localhost:3001/series/findlast').then((data) => console.log(data.data))
}

fn()

