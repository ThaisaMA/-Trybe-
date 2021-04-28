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
//console.log(pecaXadrez.toLowerCase());
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



let nota = 54;
switch(nota) {
    case nota >= 90 || nota <= 100:
        console.log('A');
    case nota >= 80 || nota < 90:
       console.log('B');
    case nota >= 70 || nota < 80:
        console.log('C');
    case nota >= 60 || nota < 70:
        console.log('D');  
    case nota >= 50 || nota < 60:
        console.log('E');
    case nota < 50:
        console.log('F');
}
