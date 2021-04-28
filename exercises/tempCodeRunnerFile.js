let custo = 2;
let venda = 0;
let custoTotal = ((custo * 0.2) + custo);
let lucro = (venda - custoTotal);

if (custo > 0 && venda > 0) {
    console.log(lucro * 100);
} else {
    console.log('erro')
}
