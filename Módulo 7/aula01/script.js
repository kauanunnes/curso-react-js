let list = []

list[0] = "Leite"
list[1] = "Carne"
list[2] = "Frango"
list[3] = "Maçã"
list[4] = "Pera"
list[5] = "Peixe"


let list1 = [1,2,3,4,5,6]
console.log(list1)

list.push("Picanha")
list.unshift("Banana")

console.log(list)

list.shift()
list.pop()

console.log(list)

list.splice(5,4)
console.log(list)
