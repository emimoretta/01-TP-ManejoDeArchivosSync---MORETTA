/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */

function combinarDosArrays(arrA, arrB) {
    let arrC
    arrC = arrA.concat(arrB)
    arrC = ordenarAscendente(arrC)
    arrC = removerDuplicados(arrC)
    return arrC
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let arrC = [] 
    arrs.forEach(sub_array => { arrC = arrC.concat(sub_array)} )
    arrC = ordenarAscendente(arrC)
    arrC = removerDuplicados(arrC)
    return arrC
}

function removerDuplicados(array){
    return array.filter((valor,indice) => array.indexOf(valor) === indice)
}

function ordenarAscendente(array){
    return array.sort((a,b) => a - b)
}

export{
    combinarDosArrays,
    combinarNArrays,
    removerDuplicados,
    ordenarAscendente
}


// exportar ambas funciones