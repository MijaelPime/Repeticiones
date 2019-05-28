let opcion  =   parseInt(prompt("Cual Opción de ejercicio quieres ejecutar 1.- Pizzarra 2.- Peso"));

if(opcion === 1) {
    let numero1 =   parseInt(prompt("Paco Escribiras los Números Desde: "));
    let numero2 =   parseInt(prompt("Escribiras los Números Hasta: "));
    
    console.log("Los numeros que Paco escribio son: ");
    for(let contador = numero1; contador <= numero2; contador = contador + 1) {
        console.log(contador);
    }
} else {
    let miPeso = parseFloat(prompt("¿Cual es tu peso?"));
    let pesoIdeal = parseFloat(prompt("¿Cual es tu peso ideal?"));
    let kilosXsemana = parseFloat(prompt("¿Kilos por semana?"));

    let semanas = mipeso/kilosXsemana;

    for(let contador2 = pesoideal; contador >= miPeso; contador2 = contador2+1) {
        
    }

} 
