
/* 
Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir 
tiene escribir en el pizarrón todos los números del num1 al num2, 
¿puedes ayudarle a Paco a hacer un algoritmo que haga esto por el?


Fui al nutriologo y me dijo que estaba gordito. Si mi peso es la variable 
peso y tengo que llegar al peso ideal ¿En cuantas semanas llegaré a ese 
peso si bajo X kilos por semana?

*/

/*
let num1 = parseInt(prompt("Ingresa el numero desde donde empezar la numeracion"));

let num2 = parseInt(prompt("Ingresa el numero donde para la numeracion"));

let i = num1;


for(let i = num1; i <= num2; i++){

    document.write("No me volvere a portar mal "+i+"</br>");

}
document.write("Maestra soy Paquito no hare más travesuras");

*/

let peso = parseInt(prompt("Ingresa tu peso actual"));

let pesoIdeal = parseInt(prompt("Ingresa tu peso ideal"));

let contador = peso;
let vueltas = 0;

if(peso>=pesoIdeal){
    
    for(contador = peso; contador> pesoIdeal; contador = contador - 2){

        document.write("Tu peso esta semana es " + contador+"</br>");

        vueltas++;

    }
    
}else{
    alert("Ingresa tu peso real no mientas");
}
document.write("Necesitarás "+vueltas+" Para llegar a tu peso ideal");
