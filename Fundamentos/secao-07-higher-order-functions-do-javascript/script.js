// Array Destructuring

// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

const [firstNumber, secondNumber, thirdNumber] = primeNumbers  
sum(firstNumber, thirdNumber) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

