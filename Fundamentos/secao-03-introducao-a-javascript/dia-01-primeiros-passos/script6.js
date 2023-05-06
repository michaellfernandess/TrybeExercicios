/*Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. 
Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

De olho na dica 👀: Use o console.log() para exibir o que cada exercício pede.*/

/*let a = 20;
let b = 23;

console.log('Adição ' + (a + b));
console.log('Subtração ' + (a - b));
console.log('Multiplicação ' + (a * b));
console.log('Divisão ' + (a / b));
console.log('Módulo ' + (a % b));*/


/* Utilize if/else para escrever um código que retorne o maior de dois números. 
Defina, no começo do seu código, duas variáveis com os valores que serão comparados.*/

/*let valor1 = 10;
let valor2 = 56;

if (valor1 > valor2) {
    console.log('Valor 1 é maior que valor 2');
} else{
    console.log('Valor 2 é menor que valor 1');
}*/

/*Utilize if/else para escrever um código que retorne o maior de dois números. 
Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

/*let a = 12;
let b = 15;

if (a > b){
    console.log('a é maior que b');
} else{
    console.log('b é maior que a');
}*/

/*Utilize if/else para escrever um código que retorne o maior de três números. 
Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

/*let a = 25;
let b = 10;
let c = 30;

if (a > b && a > c){
    console.log('O número maior é ' + a + ' (a)');
}   else if (b > a && b > c){
    console.log('O número maior é ' + b + ' (b)');
} else {
    console.log('O maior número é ' + c + ' (c)');
}*/

/*Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, 
retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. */

/*let a = 0;

if (a > 0){
    console.log('Positive');
} else if (a < 0){
    console.log('Negative');
} else{
    console.log('Zero');
}*/

/* 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

let anguloA = 100;
let anguloB = 20;
let anguloC = 40;

let somaAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos){
    if (somaAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    }

}else {
    console.log('Ângulo inválido');
}