// Utilizacion de yargs (utilizar la documentacion)
const argv = require('yargs')
    .command('mostrar', 'Imprime en consola la tabla de multiplicar.', {
        tabla: {
            demand: true,
            alias: 't'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo de la tabla de multiplicar.', {
        tabla: {
            demand: true,
            alias: 't'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}