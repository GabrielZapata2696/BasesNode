//imprimir tablas de multiplicar


const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');



console.log('limite: yargs', argv.h);


crearArchivo(argv.l, argv.b, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.green))
    .catch(err => console.log(err.red));







