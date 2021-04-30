let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];
for(i = 0; i < numbers.length; i += 0) {
    if(numbers[i] % 2 != 0) {
        impar.push(numbers[i]);
    } else {
        impar = 'nenhum valor ímpar encontrado'; 
    }
}
console.log(impar)