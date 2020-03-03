/*
El modulo es un objeto global que esta disponible a lo largo de toda la aplicacion, contiene un ID, un Exports,
y un Path. El modulo nos permite agregar en su estructura Exports todos los elementos que queremos esten disponibles de
forma global.
*/

// declaramos el require FileSystem
const fs = require('fs');

// declarar el require Colors
const colors = require('colors');

// promesa para listar la tabla con un limite descrito (multra la tabla multiplicar en base al limite)
let mostrarTabla = (tabla, limite) => {
    return new Promise((resolve, reject) => {

        // validamos que el numero ingresado sea un numero
        if (!Number(tabla)) {
            reject(`El valor introducido '${tabla}' no es un numero.`);
            return; // Al poner un return en un reject, detiene la ejecucion del codigo
        } else if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un numero.`);
            return;
        } else {
            // creamos la logica para la tabla de multiplicar
            for (let i = 1; i <= limite; i++) {
                resolve(console.log(`${tabla} * ${i} = ${tabla * i}`));
            }
        }
    });
}

// promesa para crear el archivo de la tabla y limite especificado
let crearArchivo = (tabla, limite) => {
    return new Promise((resolve, reject) => {

        // validamos que el numero ingresado sea un numero
        if (!Number(tabla)) {
            reject(`El valor introducido '${tabla}' no es un numero.`);
            return; // Al poner un return en un reject, detiene la ejecucion del codigo
        } else if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un numero.`);
            return;
        } else {
            // creamos la logica para la tabla de multiplicar
            data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${tabla} * ${i} = ${tabla * i}\n`;
            }
        }

        // llamamos la promesa para guardar la data de la tabla de multiplicar en un archivo mediante FileSystem       
        fs.writeFile(`./tablas/TablaMultiplicar${tabla}.txt`, data, (error) => {

            if (error) {
                reject(error);
            } else {
                resolve(`TablaMultiplicar${tabla}`);
            }
        });
    });
}

// exportamos la promesa mediante el metodo export
module.exports = {
    mostrarTabla,
    crearArchivo
}