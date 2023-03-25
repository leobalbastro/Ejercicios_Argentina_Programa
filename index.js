// Apunte 2

//Ejercicio 1
let num1=15
let num2=3

let suma = num1+num2
let resta = num1-num2
let multiplicacion = num1*num2
let division = num1/num2

console.log("Suma: "+suma+"\n"+"Resta: "+resta+"\n"+"Division: "+division+"\n"+"Multiplicacion: "+multiplicacion+"\n")

//Ejercicio 2
let arg="Argentina"
let pro="Programa"
let ver="4.0"
const space=" "

console.log(arg+space+pro+space+ver)

//Apunte 3

//Ejercicio 1,2 y 3
let nombre2 = prompt("Ingresa tu nombre: ")
let apellido2 = prompt("Ingresa tu apellido: ")
let edad = parseInt(prompt("Ingresa tu edad: "))
let nacionalidad = prompt("Ingresa tu Nacionalidad")

document.write(`Gracias por ingresar la información solicitada, necesitamos por favor corrobore. <br> Su nombre es: ${nombre2} ${apellido2}  <br> Su edad es: ${edad}  <br> Su nacionalidad es: ${nacionalidad} <br>`)

let numeroIngresado = parseInt(prompt("Por favor ingrese un numero:"))

//1ra manera
if(numeroIngresado>0) alert("Numero Positivo")
if(numeroIngresado<0) alert("Numero Negativo")
if(numeroIngresado===0) alert("El numero es 0")
if (isNaN(numeroIngresado)) alert("El numero ingresado no es un numero!")

//2da manera
if(numeroIngresado >0){
    alert("Numero Positivo")
}else if(numeroIngresado<0){
    alert("Numero Negativo")
}else if(numeroIngresado===0){
    alert("El numero es 0")
}else{
    alert("El numero ingresado no es un numero!")
}

document.write("Cuenta Regresiva <br>")

for(let i=10;i>=0;i--){
    if(i===0) {
        document.write("Despegue! <br>")
        break;
    }
    document.write(i +"<br>")
}

let arraynum=[]
for(let i =0;arraynum.length<20;i++){
    if(i%2==0){
        arraynum.push(i)
    } 
}
document.write("Los primeros 20 numeros pares son: <br>")
console.log(arraynum)
for(let i=0; i<arraynum.length;i++){
    if(i===19) {
        document.write(arraynum[i] +"<br>")
        break
    }

    document.write(arraynum[i] +", ")
}

document.write("Numeros pares menores a 30: <br>")

let paresMenoresA30=[]

for(let i=0;i<30;i++){
    if(i%2===0){
        paresMenoresA30.push(i)
    }
}

console.log(paresMenoresA30)
for(let i=0; i<paresMenoresA30.length;i++){
    if(i===paresMenoresA30.length-1){
        document.write(paresMenoresA30[i] + "<br>")
        break;
    }
    document.write(paresMenoresA30[i]+",")
}