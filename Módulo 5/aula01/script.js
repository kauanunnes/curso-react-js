//let tag = document.getElementsById('lista');
let tag = document.querySelector('ul');
let ol = document.querySelector('ol');


let newElement = document.createElement('li');
let newElement2 = document.createElement('li');

newElement.innerText = 'teste';
newElement2.innerText = 'este é um segundo teste';
tag.appendChild(newElement);
ol.appendChild(newElement2);
