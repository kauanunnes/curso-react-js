let list = ["Frango","Carne","Peixe","Maçã","Aveia","Laranja","Banana"]

list.forEach((x,y) => {
    console.log(`Meu valor é ${x} e estou na posição ${y}`)
})
let vowelsA = []
function changeList(...vowels){
    vowelsA = vowels
}


changeList('a','e','i','o','u')
console.log(vowelsA)

let food = [...list,'suco']
console.log(food)

let numbers = [1,2,3,4,5,6]
let copy = numbers.map(item => item*2)

console.log(copy)