let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for(i = 0; i < numbers.length; i += 1) {
    resultado = (resultado + numbers[i]); 
}
console.log(resultado / numbers.length);
if ((resultado / numbers.length) > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
