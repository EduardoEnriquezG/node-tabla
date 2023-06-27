
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
let salida = "";
let consola = "";
if (listar) {
    try {
        console.log(`======== Tabla del ${base}  ==========`.random);
        for (let i = 1; i <= hasta; i++) {
            
            let result = base *i;
            consola += `${base} x ${i} = ${result}\n`.yellow;
            salida += `${base} x ${i} = ${result}\n`;
        }

        console.log(consola);
        console.log('=================='.random);


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla del ${base} creada correctamente`.green;
    } catch (error) {
        return `${error}`.red;
    }
} else {
    return "Se realizo la operación correctamente".green;
}
    
}

module.exports = {
    crearArchivo
}