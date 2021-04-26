let fruits = [3, 4, 10, 1, 12];
let valor = 0;

for(index = 0; index < fruits.length; index += 1) {
valor += fruits[index];
}

if (valor > 15){
    console.log(valor);
} else {
    console.log('Valor menor que 16')
};