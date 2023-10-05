//Lista JS
//Exercício 2
let numpares = 0;
let numImpares = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Informe um número ${i}:`));

    if (num % 2 === 0) {
        numpares++;
    } else {
        numimpares++;
    }
}

console.log(`Quantidade de números pares: ${numpares}`);
console.log(`Quantidade de números ímpares: ${numimpares}`);