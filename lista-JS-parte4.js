//Lista JS
//Exercício 4
let salario = parseFloat(prompt("Informe o salário inicial do funcionário: R$"));
let ano = 1995;
let aumento = 0.015; 

while (ano < 2023) { 
    salario *= (1 + aumento); 

    aumento *= 2;

    ano++;
}

console.log(`O salário do funcionário em 2023 é: R$${salarioInicial}`);