/* Estruturas de decisão */
//criação de variáveis

var primeiraVariavel = 'js' // a criação do let e do const veio para resolver o problema de içagem

let numeroUm = 10, numeroDois = 5

// Soma Subtração Multiplicação Divisão
// console.log("A soma é "+ (numeroUm+numeroDois))
// console.log("A subtração é " + (numeroUm-numeroDois))
// console.log("A multiplicação é " + (numeroUm*numeroDois))
// console.log("A divisão é " + (numeroUm/numeroDois))

let verdadeiro = false, falso = false

verdadeiro ? console.log("vdd") : console.log("mentira")

// console.log(numeroUm > numeroDois)
// console.log(numeroUm < numeroDois)
// console.log(numeroUm == numeroDois)


let letra = 1;
// console.log(letra == numeroUm)
// console.log(letra === numeroUm)

if(letra === numeroUm)
    console.log("eles são identicos")
else if(letra == numeroUm)
    console.log("eles são iguais mas n sao identicos")
    else 
    console.log("eles não iguais e nem identicos")

switch(letra){
    case 1:
        console.log("opçao 1")

    break
    case 2:
    console.log("opçao 2")

    break
    default: console.log("opção inválida")
}