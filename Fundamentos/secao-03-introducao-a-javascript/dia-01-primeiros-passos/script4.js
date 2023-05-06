// OPERADOR AND &&

// let currentHour = 23;
// let message = "";

// if (currentHour >= 22){
//     message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour <18){
//     message = "Vamos fazer um bolo pro café da tarde?"
// } else if (currentHour >=11 && currentHour <14) {
//     message = "Hora do almoço!!!"
// } else if (currentHour >= 4 && currentHour <11) {
//     message = "Hmmm, cheiro de café recém-passado"
// }

// console.log(message);

// OPERADOR OR ||

/*Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

Utilizando if/else, implemente as seguintes condicionais:

Se a variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

Se a variável for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido! UwU!”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado!*/

let weekDay = 'domingo';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
    
} else {
    console.log('FINALMENTE, descanso, merecido! UwU!');
}
     

    


