// N.1

// let respuesta = prompt("Eres bellisimo/a?");

// respuesta = respuesta.toLocaleLowerCase();

// if (respuesta === 'si') {
//     alert("Ciertamente")
// } else {
//     alert("no te creo")
// }



// N.2 and 3

// let x = prompt("Escribe un numero")



// if (x % 2 === 0){
//     alert(`${x} es divisible entre 2`)
// }else {
//     alert(`${x} no es divisible entre 2`)
// }

// x = parseInt(x)

// if (x % 2 === 0){
//     alert(`${x} es numero par`)
// }else {
//     alert(`${x} no es numero par`)
// }



// N.4

// let clientNumber = prompt("Cual es su numero de cliente?")

// clientNumber = parseInt(clientNumber)

// if(clientNumber === 1000){
//     alert("We have a WINNER!")
// }else{
//     alert("Maybe the next time")
// }


// N.5 

// let numberOne = prompt("Elige un numero al azar")

// numberOne = parseInt(numberOne)

// let numberTwo = prompt("Dime uno mas")

// numberTwo = parseInt(numberTwo)



// if (numberOne < numberTwo){
//     alert(`${numberOne} es menor que ${numberTwo}`)
// } else if (numberTwo < numberOne){
//     alert(`${numberTwo} es menor que ${numberOne}`)
// }else{
//     alert("asi no funciona el juego deben ser numeros diferentes")
// }


// N.6

// let numero1 = parseInt(prompt("Por favor, ingresa el primer número:"));
// let numero2 = parseInt(prompt("Por favor, ingresa el segundo número:"));
// let numero3 = parseInt(prompt("Por favor, ingresa el tercer número:"));

// let mayor;

// if (numero1 >= numero2 && numero1 >= numero3) {
//     mayor = numero1;
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//     mayor = numero2;
// } else {
//     mayor = numero3;
// }

// alert(`${mayor} es el numero mayor`)


// N.7

// let dia = prompt("Ingresa un dia de la semana")

// dia = dia.toLocaleLowerCase();

// if (dia === "lunes") {
//     alert("¡Es lunes! ¡Nueva semana, nuevas oportunidades!");
// } else if (dia === "viernes") {
//     alert("¡Es viernes! ¡El fin de semana está cerca!");
// } else if (dia === "sábado" || dia === "domingo") {
//     alert("¡Es fin de semana! ¡Disfruta tu descanso!");
// } else {
//     alert("Ese no es un día válido de la semana.");
// }


// N.8 

// let calificacion = parseInt(prompt("Elige un numero del 1 al 10"))

// if (calificacion >= 1 && calificacion <= 10){

//     if(calificacion < 6){
//         alert('Reprobado')
//     }else if(calificacion >= 6 && calificacion <= 8){
//         alert("regular")
//     }else if(calificacion == 9){
//         alert("Bien")
//     }else if(calificacion == 10){
//         alert("Excelente")
//     }
// }else{
//     alert("Error: La calificacion debe estar entre el 1 y el 10")
// }


// N.9

// let precioBase = 50;

// let topping = prompt("Por favor ingresa el topping que deseas (oreo $10, kitkat $15, brownie $20:)").toLocaleLowerCase();

// let costoTopping;

// if (topping === "oreo"){
//     costoTopping = 10;
// } else if(topping === "kitkat"){
//     costoTopping = 15;
// }else if (topping === "brownie"){
//     costoTopping = 20
// }else{
//     alert("No tenemos ese topping lo sentimos.");
//     costoTopping = 0
// }

// let costoTotal = precioBase + costoTopping;

// alert(`EL costo total del helado es $${costoTotal} MXN`)


// N.10

// let nivel = prompt("ingrese el programa que desea elegir (Course, Carrera o Master").toLocaleLowerCase();

// let costoMensual, duracion;

// if (nivel === "course"){
//     costoMensual = 2999;
//     duracion= 2
// } else if (nivel === "carrera"){
//     costoMensual === 3999;
//     duracion === 6
// }else if (nivel === "master"){
//     costoMensual = 4999;
//     duracion = 12
// }else{
//     alert('Clses no disponibles')
// }

// if (costoMensual > 0){
//     let beca = prompt("Tienes alguna beca? (Facebook, Google, Venom, ninguna)").toLocaleLowerCase();

//     let descuento = 0;

//     if(beca === "facebook"){
//         descuento = 0.20
//     } else if (beca === "Google"){
//         descuento = 0.15;
//     }else if(beca === "venom"){
//         descuento = 0.50
//     }else if (beca !== "ninguna"){
//         alert("Beca no valida, no se aplicara ningun descuento")
//     }

//     let costoMensualDescuento = costoMensual * (1 - descuento)

//     let costoTotal = costoMensualDescuento * duracion;

//     alert(`El costo mensual con descuento es ${costoMensualDescuento.toFixed(2)} MXN`);
//     alert(`El costo total del programa es ${costoTotal.toFixed(2)} MXN`);
// 


// N.11

let vehiculo = prompt("Por favor, ingresa el tipo de vehiculo (coche, moto, autobus)").toLocaleLowerCase();

let precioKilometro;

if (vehiculo === "coche"){
    precioKilometro = 0.20;
}else if(vehiculo = "moto") {
    precioKilometro = 0.10
}else if (vehiculo === "autobus"){
    precioKilometro = 0.50 
}else{
    alert("Tipo de vehiculo no valido");
    precioKilometro = 0;
}


if (precioKilometro > 0){
    let kmsRecorridos = parseFloat(prompt("Por favor, ingresa la distancia reccorrida en kilometros"))
    let litrosConsumidos = parseFloat(prompt("Por favor, ingresa la cantidad de litros consumidos"))

    let cargoExtra;

    if (litrosConsumidos > 0 && litrosConsumidos <= 100){
        cargoExtra = 5
    } else if(litrosConsumidos > 100){
        cargoExtra = 10
    }else{
        alert("Ingresa un rango numerico valido en los litros consumidos")
    }

    let CostoTotal = (precioKilometro * kmsRecorridos) + cargoExtra

    alert(`El valor total a pagar es $${CostoTotal.toFixed(2)} MXN`)
}