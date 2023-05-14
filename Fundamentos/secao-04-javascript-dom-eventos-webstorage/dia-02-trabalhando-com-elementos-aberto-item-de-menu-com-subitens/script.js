// const whereAreYou = document.querySelector('#where-are-you');

// const parent = whereAreYou.parentElement;
// parent.style.color = 'red';

// const firstChildOfChild = whereAreYou.firstElementChild;
// firstChildOfChild.innerText = 'First'

// const firstChild = parent.firstElementChild;

// const primeiroFilho2 = whereAreYou.previousElementSibling;

// const textElement = whereAreYou.nextSibling;

// const thirdChild = whereAreYou.nextElementSibling;

// const thirdChild2 = parent.lastElementChild.previousElementSibling;

// const  xablau = xablin; 


//Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.querySelector('#pai'); // Acessado o elemento pai
const irmaoElementoOndeVoceEsta = document.createElement('section'); // Novo elemento criado, no caso é uma 'section'
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'; // Nome do id do elemento criado, no caso é 'irmaoElementoOndeVoceEsta'
pai.appendChild(irmaoElementoOndeVoceEsta); // Empurre o elemento criado, acessando a tag pai, e com o comando appendChild, crie o filho

//Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta'); //acesse o elemento pai
const filhoElementoOndeVoceEsta = document.createElement('section'); //elemento criado, 'section'
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta'; // nome do id do elemento criado
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); // adicione o elemento criado como filho do elemento com appendChild

// Crie um filho para `primeiroFilhoDoFilho`.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho'); //recupere o elemento
const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // novo elemento
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho'; //id do novo elemento
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // Adicione o elemento criado como filho do elemento

//A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoPrimeiroFilhoDoFilho
    .parentElement // primeiroFilhoDoFilho
    .parentElement // elementoOndeVoceEsta
    .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);


//Remova a tag h2, filha do elemento where-are-you.
const parent = document.getElementById('parent');
const allChildren = parent.childNodes;

for (let index = allChildren.length - 1; index >= 0; index -= 1) {
    const currentChild = allChildren[index];

    if (currentChild.id === 'where-are-you') { // verifica se o id do filho atual é igual a 'where-are-you'
        currentChild.removeChild(currentChild.firstElementChild); // remove o primeiro elemento do filho atual, no caso a tag <h2>
    }
}

//Solução sem utilizar um laço for:
//Você pode utilizar o seletor getElementById para selecionar o elemento com o Id where-are-you e empregar o método removeChild():
const parent2 = document.getElementById('where-are-you');
parent2.removeChild(parent2.firstElementChild);
