require('dotenv').load();

const axios = require('axios');

let getClima = async (lat, lng) => {
   
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.WEATHER_API_KEY}`);
    
    if (resp.data.status === 'ZARO_RESULTS') {
        throw new Error(`No hay datos del clima`);
    } else {
        return resp.data.main.temp;
    }
}

module.exports = {
    getClima
}
