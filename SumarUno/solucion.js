function solucion(digitos){
    try {
        // let digitos = [9,8,9] //entrada del problema
    
        let entrada = 0; //contador para pasar la entrada a numero
        digitos.forEach((d, i) => entrada += d * Math.pow(10, (digitos.length - 1) - i)); //conversion de la entrada en un numero decimal
    
        entrada++ //suma uno
    
        salida = [...entrada.toString()] //resultado en forma de arrya
    
        console.log(salida)
    } catch (error) {
        console.log('Ocurrio un error...\n', error)
    }
}

solucion([9,8,9])