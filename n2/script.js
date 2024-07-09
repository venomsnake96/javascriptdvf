// N.1

let numerosAleatorios = [];

for(let i = 0; i < 10; i++){
    let numero = Math.floor(Math.random() * 101);
    numerosAleatorios.push(numero)
}

console.log(numerosAleatorios)


//N.2

// let cadena = prompt("Por favor, ingresa una cadena de texto con varias palabras separadas por comas (por ejemplo: '1,2,3,4,5'):")

// let array = cadena.split(',');

// let arrayNumber = array.map(Number)

// console.log(array)

// console.log(arrayNumber)


//N.3 

let array = [10, 40, 30, 20, 15, 5];

array.sort(function(a, b){
    return a - b;
});

let numeroMenor = array[0]

let numeroMayor = array[array.length - 1]

console.log('Arreglo ordenado de menor a mayor', array)
console.log(`El numero menor es ${numeroMenor}`)
console.log(`El numero mayor es ${numeroMayor}`)
