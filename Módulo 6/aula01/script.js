
// //Objetos literais

// const pessoa = {
//     nome: 'Mariana',
//     sobrenome: 'Passos'
// }
// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)

// const chave = 'nome'

// console.log(pessoa[chave])
// console.log(pessoa['sobrenome'])
 
// //Objetos construtores
// const pessoa1 = new Object()
// pessoa1.nome = 'Luiz'
// pessoa1.sobrenome = 'Peixota'
// pessoa1.idade = 17

// delete pessoa1.nome // Apagando alguma chave do objetos

// //Métodos
// pessoa1.nome = 'Luiz' 

// pessoa1.falarNome = function () {
//     console.log(`${this.nome} está falando seu nome`) 
// }

// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date()
//     const ano = dataAtual.getFullYear()
//     return ano - this.idade
// }
// for(let chave in pessoa1){
//     console.log(pessoa1[chave])
// }
// console.log(pessoa1.getDataNascimento())

// // Factory functions / Constructor functions / Classes

// //Factory Functions
// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Joseph', 'Abraam')
// console.log(p1.nomeCompleto)

// //Constructor functions
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome

//     Object.freeze(this) // <- Trava TODOS os objetos criados a partir desse construtor (não pode criar/deletar/alterar NENHUMA chave)
// }

// const p2 = new Pessoa('Luiz','Nunes')
// Object.freeze(p1) // <- travando o objeto

// //defineProperty - defineProperties

// function Produto(nome,valor,estoque) {
//     // Object.defineProperty(this, 'estoque', {
//     //     enumerable: true, //mostra a chave
//     //     value: estoque, //associa o valor estoque ao      propriedade estoque
//     //     writable: false, //alterável 
//     //     configurable: false //a chave é reconfigurável?
//     // })

//     Object.defineProperties(this,{
//         nome: {
//             enumerable: true, //mostra a chave
//             value: nome, //associa o valor estoque ao propriedade estoque
//             writable: false, //alterável 
//             configurable: false //a chave é reconfigurável?
//         },
//         preco: {
//             enumerable: true, //mostra a chave
//             value: valor, //associa o valor estoque ao propriedade estoque
//             writable: false, //alterável 
//             configurable: false //a chave é reconfigurável?
//         },
//         estoque: {
//             enumerable: true, //mostra a chave
//             value: estoque, //associa o valor estoque ao propriedade estoque
//             writable: false, //alterável 
//             configurable: false //a chave é reconfigurável?
//         }
//     })
// }

// const produto1 = new Produto('Mouse',25,6)
// console.log(produto1)


// //Getter e Setters - defineProperty 
// function Produto2(nome, valor, estoque){
//     this.nome = nome
//     this.valor = valor

//     let estoquePrivado = estoque

//     Object.defineProperty(this, 'estoque',{
//         enumerable: true,
//         configurable: false,
//         get: function() {
//             return estoquePrivado;
//         },
//         set: function(valor) {
//             if(typeof valor !== 'number'){
//                 console.log('Error.')
//                 return
//             }

//             estoquePrivado = valor

//         }
//     })

// }

// const produto2 = new Produto2('Mouse',25,6)
// console.log(produto2.estoque)


const cinema = {
    temIngresso: false,
    idade: 15,
    temCarteirinha: false,
    censura: 16,
    estaComPais: true
}


function solucao(...precos){
    if(typeof precos[0] == "number"){
        var soma
        var menor
        var total
        if(precos.length >= 5){
            precos.sort(function(a, b){return a-b});
            menor = precos[0]
            soma = precos.reduce((result, item) => {
                return result + item
            })
            total = soma - menor
        }else{
            total = precos.reduce((result, item) => {
                return result + item
            })
        }
        console.log(total)
    }
       
    
    
}
solucao(500,200,200)