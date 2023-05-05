/*let diasDaSemana = {
    1: 'domingo',
    2: 'segunda-feira',
    3: 'terça-feira',
    4: 'quarta-feira',
    5: 'quinta-feira',
    6: 'sexta-feira',
    7: 'sábado',
  };
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo*/

 /* “A jogadora Marta Silva tem 34 anos de idade”*/
 /*A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.*/
// A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

  let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3},

    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]

  }
  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata' );

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade') ;

