const buttonEx2= document.getElementById('button2')

buttonEx2.addEventListener('click',(e)=>{
    e.preventDefault();
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    const p1 = document.getElementById('result1')
    const p2 = document.getElementById('result2')

    console.log(p1)
    console.log(p2)
    console.log(num2)
    console.log(num1)
    p1.innerHTML= `Numero 1: ${num1}`
    p2.innerHTML= `Numero 2: ${num2}`
document.getElementById('submitNumber').reset();


})

const buttonPlus = document.querySelectorAll(".buttonOp")

const alHacerClick= function(evento){
    evento.preventDefault();
    let num1 = parseInt(document.getElementById('num3').value)
    let num2 = parseInt(document.getElementById('num4').value) || 0

    const p1 = document.getElementById('result')

    const operations={
        '+': (num1,num2)=>num1+num2,
        '-': (num1,num2)=>num1-num2,
        '*': (num1,num2)=>num1*num2,
        '/': (num1,num2)=>num1/num2
    }
    if(num2===0&& this.innerText=='/'){
        p1.innerText="No se puede dividir por 0"
    }else{
    p1.innerText=operations[this.innerText](num1,num2)
}
document.getElementById('calc').reset();

}


buttonPlus.forEach(boton=>boton.addEventListener('click', alHacerClick))