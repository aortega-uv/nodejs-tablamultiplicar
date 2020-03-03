// Utilizacion de yargs (utilizar la documentacion)
const argv = require('./config/yargs.js').argv;


// requires para utilizar los datos del js multiplicar
const { mostrarTabla, crearArchivo } = require('./multiplicar/multiplicar.js');

// logica de operaciones para mostrar o crear una tabla con su limite
let comando = argv._[0];

switch (comando) {
    case 'mostrar':
        // llamamos a la promesa para listar la tabla en linea de comandos
        mostrarTabla(argv.tabla, argv.limite).then(mostrarTabla => {
            console.log(mostrarTabla);
        }).catch(error => {
            console.log('Error al listar la tabla', error);
        });
        break;

    case 'crear':
        // llamamos a la promesa a recibir el dato crear desde la consola
        crearArchivo(argv.tabla, argv.limite).then(crearArchivo => {
            console.log(`El archivo de la tabla se ha creado correctamente ${crearArchivo.green}`);
        }).catch(error => {
            console.log('Error al crear el archivo', error);
        });
        break;

    default:
        console.log('Comando no reconocido');
}