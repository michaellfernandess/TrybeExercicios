function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
    //console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.  
  }
  
  imprimeIdade()
//--------------------------------------------------------------------------------------------------//

  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  //pessoa = {
   pessoa.nome = 'Luna';
    pessoa.idade = 19;
  //} // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

//-----------------------------------------------------------------------------------------------------//


  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);

//-----------------------------------------------------------------------------------------------------//


  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${name} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b} é: ${a + b}`);

  //----------------------------------------------------------------------------------------------

  const numeroAleatorio = () => Math.random();

  console.log(numeroAleatorio());

  //--------------------------------------------------------------------------------------------

  let hello = nome => `Olá, ${nome}!`
    //return `Olá, ${nome}!`
  //}
  let nome2 = 'Ivan';
  console.log(hello(nome2));

  //---------------------------------------------------------------------------------------------------

  const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
    //return `${nome} ${sobrenome}`

  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

  //------------------------------------------------------------------------------------------

  let speed = 90;
  const speedCar = (speed) => 
  (speed >= 120) ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida'
  
  // if (speed >= 120) {
   //   return `Você ultrapassou o limite de velocidade`;
  //  } else {
    //  return `Você está na velocidade permitida`;
   // }
  
  console.log(speedCar(speed));