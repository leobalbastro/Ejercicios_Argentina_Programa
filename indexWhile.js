let algo
while (algo!=="Fin"){
    algo= prompt("agrega algo a tu web")
    document.write("<p>"+algo+"</p>")
}

let quest
while(quest!==true){
    quest=confirm("Deseas ver la pagina?")
}

let entry
let numerosIngresados=0
let total=0
while(entry!==0){
    entry=parseInt(prompt("Ingresa un numero"))
    total+=entry
    numerosIngresados++
}
document.write("Numeros Ingresados en total: "+numerosIngresados +"<br>")
document.write("Suma total de los numeros ingresados: "+total+"<br>")