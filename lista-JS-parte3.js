//Lista JS 
//Exercício 3
let qtdnums = parseInt(prompt("Informe a quantidade de números: "));

let menorValor = Infinity;
let maiorValor = -Infinity;
let somaV = 0;

for (let i = 1; i <= qtdnums; i++) {
    let num = parseFloat(prompt(`Informe um número ${i}:`));

    if (num < menorValor) {
        menorValor = num;
    }

    if (num > maiorValor) {
        maiorValor = num;
    }

    soma += num;
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${soma}`);