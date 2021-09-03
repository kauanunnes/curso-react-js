let aluno = {
    nome: 'Anita',
    idade: 22,
    curso: 'Engenharia Civil',
    get getNome(){
        return this.nome
    },
    set setNome(nome){
        this.nome = nome
    },
    get getIdade(){
        return this.idade
    },
    set setIdade(idade){
        this.idade = idade
    }

}
console.log(aluno.getNome)

aluno.setNome = 'Keyla'

console.log(aluno.getNome)

console.log(aluno.getIdade)