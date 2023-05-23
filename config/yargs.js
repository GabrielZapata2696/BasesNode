const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Base a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: false,
        description: 'Define el limite de la multiplicación'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero';
        } else if (argv.h < 1) {
            throw 'El limite debe ser mayor a 0';
        }
        return true;
    })
    .argv;


module.exports = argv;
