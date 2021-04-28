let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



let data = 21;
let mes = 12;

if (data > mes) {
    console.log(data);
} else {
    console.log(mes);
}



let primeiro = 77;
let segundo = 876;
let terceiro = 87;

if(primeiro > segundo && primeiro > terceiro) {
    console.log(primeiro);
}
else if(segundo > primeiro && segundo > terceiro) {
    console.log(segundo);
}
else {
    console.log(terceiro);
}



let numero = 0;

if(numero > 0) {
    console.log('positive');
}
else if(numero == 0) {
    console.log('zero');
}
else {
    console.log('negative');
}



let ang1 = 50;
let ang2 = 40;
let ang3 = -190;

if(ang1 + ang2 + ang3 == 180) {
    console.log('true');
}
else if(ang1 + ang2 + ang3 < 0) {
    console.log('erro');
}
else {
    console.log('false');
}



let pecaXadrez = 'peão';
//let pecaxadre1 = pecaXadrez.toLowerCase();
switch(pecaXadrez) {
    case 'rei':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
        break;
    case 'rainha':
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break;
    case 'cavalo':
        console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
        break;
    case 'torre':
        console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças');
        break;
    case 'bispo':
        console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
        break;
    case 'peão':
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
        break;   
}



let nota = -10;

if (nota >= 90 && nota <= 100) {
    console.log('A');
}
else if (nota >= 80 && nota < 90) {
    console.log('B');
}
else if (nota >= 70 && nota < 80) {
    console.log('C');
}
else if (nota >= 60 && nota < 70) {
    console.log('D');  
}
else if (nota >= 50 && nota < 60) {
    console.log('E');
}
else if (nota >= 0 && nota < 50) {
    console.log('F');
}
else {
    console.log('erro')
}



let num1 = 661;
let num2 = 657;
let num3 = 576;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log('true');
} else {
    console.log('false');
}



let num1 = 661;
let num2 = 657;
let num3 = 576;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log('true');
} else {
    console.log('false');
}



let num1 = 660;
let num2 = 658;
let num3 = 576;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log('true');
} else {
    console.log('false');
}



let custo = 2;
let venda = 0;
let custoTotal = ((custo * 0.2) + custo);
let lucro = (venda - custoTotal);

if (custo > 0 && venda > 0) {
    console.log(lucro * 100);
} else {
    console.log('erro')
}



let salarioBruto = 3500.10;
let inss;
let ir;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} 
else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
}
else {
    inss = salarioBruto - 570.88;
};

let salarioSemInss = salarioBruto - inss;

if (salarioSemInss < 1903.99) {
    ir = salarioSemInss;
}
else if (salarioSemInss < 2826.66) {
    ir = (salarioSemInss * 0.075) - 142.80;
}
else if (salarioSemInss < 3751.06) {
    ir = (salarioSemInss * 0.15) - 354.80;
}
else if (salarioSemInss < 4664.69) {
    ir = (salarioSemInss * 0.225) - 636.13;
}
else {
    ir = (salarioSemInss * 0.275) - 869.36;
}

console.log('O salário liquído é de ' + (salarioSemInss - ir) + ' reais.');