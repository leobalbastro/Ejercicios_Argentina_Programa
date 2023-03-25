const send=document.querySelector('button');
send.onclick=function(){
    let nombre = document.getElementById("Nombre").value || undefined
    let apellido= document.getElementById("Apellido").value || undefined
    let edad= document.getElementById("age").value || undefined
    let dni= document.getElementById("dni").value || undefined
    let email= document.getElementById("mail").value || undefined

    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}, DNI: ${dni}, Correo Electronico: ${email}`)

    // let newDiv = document.createElement("td")
    // newDiv.innerHTML=`${nombre}, ${apellido}, ${edad}, ${dni}, ${email}`
    // console.log(newDiv)
    if(nombre!==undefined && apellido!==undefined && edad!==undefined &&dni!==undefined &&email!==undefined){
        let array=[nombre,apellido,edad,dni,email]
        let newRow = document.createElement("tr")
        let newContent
        for(i=0;i<array.length;i++){
            newContent=document.createElement("td")
            newContent.innerHTML=`${array[i]}`
            newRow.appendChild(newContent)
        }
        const currentRow = document.getElementById("resultsTable")
        currentRow.appendChild(newRow)
    }
}

document.addEventListener('submit', function(e){
    e.preventDefault();
    e.target.reset();
})