// N.1

// let number = parseInt(prompt("Por favor, ingresa un numero:"));

// var contador = 1;

// while(contador <= number){
//     if(contador % 5 === 0){
//         console.log(contador)
//     }
//     contador++
// }


// N.2

// let number1 = parseInt(prompt("Ingresa un numero entre 1 y 50"))
// let number2 = parseInt(prompt("ingresa un segundo numero entre 1 y 50"))

// if ((number1 < 1 || number1 > 50) || (number2 < 1  || number2 > 50)){
//     alert("Ambos numeros deben estar entre 1 y 50, recarga la pagina para ingresar los datos nuevamente")
// }else {
//     let counter = 1 

//     while (counter <= 50){
//         if(counter === number1 || counter === number2){
//             console.log(`${counter} Loteria!`);
//         }else{
//             console.log(counter)
//         }
//         counter++
//     }
// }

// N.3 

let numbers = [];

function capturarNumeros(){
    while (true) {
        let input = prompt('ingreasa un numero del 1 en adelante (o ingresa el numero 0 para terminar)');

        let number = Number(input);
        
        if (number === 0){
            break;
        }

        if(!isNaN(number)){
            numbers.push(number)
        } else {
            console.log("ingresa un numro valido")
        }

    }
    console.log(`los numeros capturados son ${numbers}`)
}

capturarNumeros()
