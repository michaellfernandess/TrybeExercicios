const whereAreYou = document.querySelector('#where-are-you');

const parent = whereAreYou.parentElement;
parent.style.color = 'red';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'First'

const firstChild = parent.firstElementChild;

const primeiroFilho2 = whereAreYou.previousElementSibling;

const textElement = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;
