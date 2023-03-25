function suma (sumando_1, sumando_2) {
    return sumando_1 + sumando_2;
}

function resta(restando_1, restando_2){
    return restando_1-restando_2
}

function division(dividendo,divisor){
    return dividendo/divisor
}

function multiplicacion(numero,multiplo){
    return numero*multiplo
}

function createOperation(key) {
    if(key in opcionesNumericas) {
      return opcionesNumericas[key]
    }
    
    throw new Error("Operation does not exist")
  }  

const allOperationsFns = (a, b) => {
    let operations = Object.keys(opcionesNumericas)
    return operations.map(op => createOperation(op)(a, b))
  }

let opcionesNumericas={
    1: suma,
    2: resta,
    3: multiplicacion,
    4: division,
    "S": suma,
    "R": resta,
    "D": division,
    "M": multiplicacion,
}

let operacion=prompt("Que tipo de operacion quieres realizar? \n 1: Suma (S) \n 2: Resta (R) \n 3: Multiplicacion (M) \n 4: Division (D)")

// console.log(operacion.charAt(0).toUpperCase())//=== Object.values(opcionesNumericas))


let sumando_1=parseInt(prompt("Ingresa numero 1"))
let sumando_2=parseInt(prompt("Ingresa numero 2"))
// const fn = opcionesNumericas[operacion] //devuelve el ultimo numeor ingresado
if (isNaN(parseInt(operacion))===false){
    let result=allOperationsFns(sumando_1,sumando_2)
    console.log(result[operacion-1]) 
}else{
    operacion=operacion.charAt(0).toUpperCase()
    let result= allOperationsFns(sumando_1,sumando_2)
    console.log(result[operacion])
}




