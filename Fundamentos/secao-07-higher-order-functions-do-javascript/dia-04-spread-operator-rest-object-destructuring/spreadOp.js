// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maracujá', 'Banana', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite compensado', 'Paçoca', 'Nutella'];

const fruitSalad = (fruit, additional) => {
  const fruitsWithAditional = [...fruit, ...additional];
  return fruitsWithAditional;
  // Escreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens));