import fs from 'fs'


/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    let datos
    try{
        datos = fs.readFileSync(ruta, 'utf-8')
    }
    catch (error){
        console.log(error)
    }

    return datos
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    
    try{
        if(shouldCreateIfNotExists){
            fs.writeFileSync(ruta,texto)
            console.log("El archivo se escribió correctamente")
        }
        else{
            console.log("El archivo no existe")
        } 
    }
    catch (error){
        console.log(error)
    }

}



export{
    leerArchivoComoString,
    escribirTextoEnArchivo
}