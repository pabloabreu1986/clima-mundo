const argv = require('./config/yargs').argv;
const colors = require('colors');
const lugar = require('./lugar/lugar');
const {getClima} = require('./clima/clima');


let encodedUrl = encodeURI(argv.direccion);

lugar.get(encodedUrl)
        .then(result => {
                console.log(result);
                getClima(result.lat, result.lng)
                        .then(res => console.log(res.data.main))
                        .catch(e => console.log(e))
        })
        .catch(e => console.log(e))



