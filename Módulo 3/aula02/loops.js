/* Estruturas de repetição */


let flag = true
let contador = 0
let resultado
const painel = document.getElementById('painel')

/* 
while(flag){
    if(contador < 10){
        console.log("Funcionando vez:  "+contador)

        texto = "trabalhando "
        resultado = document.createTextNode(texto)
        painel.appendChild(resultado)

        contador++ 
        
    }
    else flag = false

}

*/

for(let i = 0; i < 20; i++){
    if(i % 2 == 0){
        resultado = document.createTextNode(i + " ")
        painel.appendChild(resultado)
    }
}
