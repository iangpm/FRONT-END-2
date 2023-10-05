//Lista JS
//Exercício 6
function calcularmontante(capital, juros, meses) {
    juros = juros / 100;
    let montante = capital * Math.pow((1 + juros), meses);
    montante = parseFloat(montante.toFixed(2));

    return montante;
}

let capital = parseFloat(prompt("Informe o capital inicial investido: R$"));
let juros = parseFloat(prompt("Informe a taxa de juros mensal em percentual: "));
let meses = parseInt(prompt("Informe o tempo do investimento em meses: "));

let resultado = calcularMontanteInvestimento(capital, juros, meses);
console.log(`O retorno do investimento foi de R$${resultado}`);