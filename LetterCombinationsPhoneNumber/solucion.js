function solucion(digitos){
    try {
        // let digitos = "23"

        let mapeo = {
            "2": ['a', 'b', 'c'],
            "3": ['d', 'e', 'f'],
            "4": ['g', 'h', 'i'],
            "5": ['j', 'k', 'l'],
            "6": ['m', 'n', 'o'],
            "7": ['p', 'q', 'r', 's'],
            "8": ['t', 'u', 'v'],
            "9": ['w', 'x', 'y', 'z'],
        }

        let entrada = [...digitos]

        let salida = []

        if (entrada.length > 0) {
            mapeo[entrada[0]].forEach(a => {
                if (entrada.length > 1) {
                    mapeo[entrada[1]].forEach(b => {
                        if (entrada.length > 2) {
                            mapeo[entrada[2]].forEach(c => {
                                if (entrada.length > 3) mapeo[entrada[3]].forEach(d => salida.push(`${a}${b}${c}${d}`) );
                                else salida.push(`${a}${b}${c}`)
                            });
                        }else salida.push(`${a}${b}`)
                    });
                }else salida.push(`${a}`)
            });
        }

        console.log(salida)

    } catch (error) {
        console.log('Ocurrio un error...\n', error)
    }
}

solucion("23")