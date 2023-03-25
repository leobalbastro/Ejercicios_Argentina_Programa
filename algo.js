let algo = "mi numero"
if (algo==="mi numero"){
    let algo="algo diferente"
    console.log(algo)
}
console.log(algo)

console.log("defino la variable algo")
var algo2= "mi numero"
console.log("evaluo si algo es igual a mi numero")
if(algo==="mi numero"){
    console.log("vuelvo a declarar la variable algo")
    var algo2= "algo diferente"
    console.log("muestro algo por consola")
    console.log(algo)
}
console.log("vuelvo a mostrar algo por consola esperando a que me traiga el valor inicial del scope")
console.log(algo)


let algo3 = "inicial"
console.log(algo)
algo = "final"
console.log(algo)

let algo4 = "inicial"
console.log(algo)
let algo5="final"
console.log(algo)
