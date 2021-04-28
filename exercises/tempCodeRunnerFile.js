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