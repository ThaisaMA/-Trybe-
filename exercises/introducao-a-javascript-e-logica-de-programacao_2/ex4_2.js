
for(let value of numbers) {
    console.log(value);
}




let resultado = 0;
for(let i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];
}
console.log(resultado);




console.log(resultado/numbers.length);




if (resultado/numbers.length > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}




let maior = 0;
for (let i = 0; i < numbers.length - 1; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    } 
}
console.log(maior);




let soma = 0;
for ( let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] % 2 !== 0) {
        soma = soma + 1;
    } else {
        soma = 'nenhum valor impar encontrado';
    } 
}
console.log(soma)




let resultado = 0;
let numbers = [5, 9, 3, 19, 7, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];
}
let menor = resultado;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor);




let valor = [];
for (i = 0; i < 25; i += 1) {
    valor[i] = i + 1;
}
console.log(valor);




let array = [];
for (i = 0; i < 25; i += 1) {
    array[i] = valor[i] / 2;
}
console.log(array);