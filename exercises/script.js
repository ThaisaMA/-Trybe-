const nome = "Thaísa";
const birthCity = "Volta Redonda";
let birthYear = 1992;

console.log(nome);
console.log(birthCity);
console.log(birthYear);

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

let base = 5;
let altura = 8;
let area = (base * altura);
let perimetro = ((2 * base) + (2 * altura));

console.log(area);
console.log(perimetro);

let nota = 60;

if(nota >= 80){
    console.log ('Parabéns, você foi aprovado!');
}
else if(nota < 80 && nota >= 60){
    console.log('Você está na lista de espera.');
}
else {
    console.log('Você foi reprovado.');
}

let status = 'reprovada';

switch(status){
    case 'aprovada':
        console.log('Parabéns, você foi aprovado!');
        break;
    case 'lista':
        console.log('Você está na lista de espera.');
        break;
    case 'reprovada':
        console.log('Você foi reprovado.');
        break;
    default:
        console.log('Não se aplica.')
}

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for( let nome of names) {
    console.log (nome);
}

