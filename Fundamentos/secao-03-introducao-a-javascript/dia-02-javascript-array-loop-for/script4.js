/*let fruits = [3, 4, 1, 10, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1){
    sum += fruits[index];
}
if (sum > 15){
    console.log(sum);

} else {
console.log('Valor menor que 16');
}*/


/* Lidando dom arrays*/ 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}

console.log(smallestNumber);



