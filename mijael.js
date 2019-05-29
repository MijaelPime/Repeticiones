let opcionJuego = 0;
do {
    opcionJuego = parseInt(prompt("Escoje una Opcion \n 1) Jugar al Regaño \n 2) Jugar Peso \n Cancelar para Salir"));

    if(opcionJuego === 2) {
        let pesoActual = parseFloat(prompt("¿Cual es tu peso Actual?"));
        let pesoIdeal = parseFloat(prompt("¿Cual es tu peso Ideal?"));
        let pesoXsemana = parseFloat(prompt("¿Cuantos Kilos quieres bajar por semana?"));
        
        let semana = 0;
        
            while(pesoIdeal < pesoActual) {
                pesoActual = pesoActual - pesoXsemana;
                semana = semana+1;
            }
        alert("Semas en las que tardaras en pornerte en forma: " + semana);

    }else if(opcionJuego === 1) {
            let numero1 = parseInt(prompt("Ingresa el primer Número"));
            let numero2 = parseInt(prompt("Ingresa el ultimo Número"));
            let validacion  =  numero1 < numero2 && numero2 > numero1;
            let cadena = "";
            if(validacion) {
                for (let contador = 1; numero1 <= numero2; contador = contador + 1) {
                    cadena = cadena + " "+ numero1;
                    numero1 = numero1 + 1;
                }
                alert(cadena);
            }
    }
}while(opcionJuego <= 3);









