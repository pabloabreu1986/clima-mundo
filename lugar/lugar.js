const axios = require('axios');

let get = async (direccion) => {
   
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ direccion }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    
    if (resp.data.status === 'ZARO_RESULTS') {
        throw new Error(`No hay datos para la ciudad ${ direccion }`);
    } else {
        let location = resp.data.results[0];
        let cors = location.geometry.location;

        return {
            direccion: location.formatted_address,
            lat: cors.lat,
            lng: cors.lng
        }
    }
}

module.exports = {
    get
}

module.exports = {
    get
}
