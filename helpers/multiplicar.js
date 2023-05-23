const fs = require('node:fs');
const colors = require('colors');

const multiplicar = (base, limite) => {
    let salida = '';
    let consola = '';
    return new Promise((resolve, reject) => {
        for (let index = 1; index <= limite; index++) {
            consola += `${base} ${'x'.america} ${index} ${'='.green} ${base * index} \n`;
            salida += `${base} ${'x'} ${index} ${'='} ${base * index} \n`;

        }
        resolve({ salida, consola });

    });
};

const crearArchivo = async (listar, base = 5, limite) => {


    try {
        const tabla = await multiplicar(base, limite);


        fs.writeFileSync(`./salida/tabla-${base}.txt`, tabla.salida);

        const imprime = await imprimirTabla(listar, tabla.consola, base);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

imprimirTabla = async (listar, tabla, base) => {
    if (listar) {
        console.log('==================='.green);
        console.log('   TABLA DEL '.green, colors.blue(base), '    ');
        console.log('==================='.green);
        console.log(tabla);
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crearArchivo
}; 