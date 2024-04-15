import * as arreglos from './src/apareo.js'
import * as archivos from './src/utils/fileUtils.js'
import * as transformacion from './src/utils/transformUtils.js'

// leo los 4 archivos a memoria
let archivo1 = archivos.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
let archivo2 = archivos.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
let archivo3 = archivos.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
let archivo4 = archivos.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos
let array1 = transformacion.transformarStringEnArrayDeNumeros(archivo1,',')
let array2 = transformacion.transformarStringEnArrayDeNumeros(archivo2,',')
let array3 = transformacion.transformarStringEnArrayDeNumeros(archivo3,',')
let array4 = transformacion.transformarStringEnArrayDeNumeros(archivo4,',')


array1 = arreglos.removerDuplicados(arreglos.ordenarAscendente(array1));
array2 = arreglos.removerDuplicados(arreglos.ordenarAscendente(array2));
array3 = arreglos.removerDuplicados(arreglos.ordenarAscendente(array3));
array4 = arreglos.removerDuplicados(arreglos.ordenarAscendente(array4));


// combino los primeros dos arrays
let arrayCombinado1 = arreglos.combinarDosArrays(array1,array2)
archivos.escribirTextoEnArchivo("./out/combinado.out",
transformacion.transformarArrayDeNumerosAUnSoloString(arrayCombinado1,'_'),
true)

// combino los cuatro arrays
let arrayCombinado2 = arreglos.combinarNArrays([array1,array2,array3,array4])
archivos.escribirTextoEnArchivo("./out/combinado2.out",
transformacion.transformarArrayDeNumerosAUnSoloString(arrayCombinado2,'_'),
true)












