const argv = require('./config/yargs').argv;
const colors = require('colors');
const lugar = require('./lugar/lugar');


let encodedUrl = encodeURI(argv.direccion);

lugar.get(encodedUrl);

