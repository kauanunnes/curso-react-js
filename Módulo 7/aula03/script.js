let numbers = [1,2,3,4,5,6,7,8]

let [a,b,c,d] = numbers

console.log(a)
console.log(b)
console.log(c)
console.log(d)

const soma = numbers.reduce((result, item) => {
    return result + item
})
console.log(soma)


const filter = numbers.filter( item => item % 2 == 0 )

console.log(filter)

const students = [
    {
        name: "João",
        nota: 4
    },
    {
        name: "Mariana",
        nota: 5
    },
    {
        name: "Jorge",
        nota: 9.5
    },
    {
        name: "Karina",
        nota: 10
    }

]

const aprovados = students.filter(aluno => aluno.nota >= 6)
console.log(aprovados)