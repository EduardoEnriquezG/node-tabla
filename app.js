
const { demandOption } = require('yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();
crearArchivo(argv.b,argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'.green))
.catch( err => console.log(`${err}`.red));

// console.log(process.argv);
// console.log('base: yargs', argv.base);
// console.log(process.argv);
// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');3
// console.log(arg3, base);

