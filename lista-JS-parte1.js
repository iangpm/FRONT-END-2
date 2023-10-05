//Lista JS
//Exercício 1
let paisA = 80000;
let taxacrescA = 0.03;
let paisB = 200000;
let taxacrescB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= 1 + taxaCrescimentoA;
    populacaoB *= 1 + taxaCrescimentoB;
    anos++;
}

console.log(`${anos} anos se passarã0 para a população do país A ultrapassar ou igualar a população do país B`);