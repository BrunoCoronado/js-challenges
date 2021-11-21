try {
    let digitos = [9,9,9]

    let entrada = 0;
    digitos.forEach((d, i) => entrada += d * Math.pow(10, (digitos.length - 1) - i));

    entrada++

    entrada = entrada.toString()

    salida = []

    for (let i = 0; i < entrada.length; i++) salida.push(entrada.charAt(i)) 

    console.log(salida)
} catch (error) {
    console.log('Ocurrio un error...\n', error)
}