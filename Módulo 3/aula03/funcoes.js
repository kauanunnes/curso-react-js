/* aula de funções */

let painel = document.getElementById("div1")
let texto = "testando"


//função com parametro e com retorno
function soma(num1,num2){
    return num1+num2
}

texto = soma(1,5)
let resultado = document.createTextNode(texto)
painel.appendChild(resultado)

texto = endereco()
resultado = document.createTextNode(texto)
painel.appendChild(resultado)


//função sem parametro e com retorno
function endereco(){
    return " Mariana"
}

//função sem parametro e sem retorno
function olaMundo(){
    console.log("oi mundo")
}

olaMundo()