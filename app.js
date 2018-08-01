const argv = require('./config/yargs').argv;
const colors = require('colors');
const {getLugar} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

console.log(argv.direccion);
let getInfo = async (direccion) => {
        let cords = await getLugar(direccion);
        let temp = await getClima(cords.lat, cords.lng);

        return `El clima en ${cords.direccion} es de ${temp} grados`;
}

getInfo(argv.direccion)
        .then(res => console.log(res))
        .catch(e => console.log(e));



