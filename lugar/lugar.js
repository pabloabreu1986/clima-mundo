const axios = require('axios');

let get = (encodedUrl) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    .then((res) => {
        if (res.data.results.length == 0) {
            console.log(res.status, res.data.results);
        } else {
            console.log(`============DATA============`.green);
            console.log(`Dirección: ${ res.data.results[0].formatted_address }`);
            console.log(`Longitud: ${ res.data.results[0].geometry.location.lat }`);
            console.log(`Latitud: ${ res.data.results[0].geometry.location.lng }`);
            console.log(`============================`.green);
        }
        
    })
    .catch(e => console.log('Error: ', e))
}

module.exports = {
    get
}
