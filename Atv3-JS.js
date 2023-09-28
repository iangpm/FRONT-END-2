const notas = [];
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia() {
  rl.question('Digite a nota 1: ', (nota1) => {
    notas.push(parseFloat(nota1));
    rl.question('Digite a nota 2: ', (nota2) => {
      notas.push(parseFloat(nota2));
      rl.question('Digite a nota 3: ', (nota3) => {
        notas.push(parseFloat(nota3));

        let somaNotas = 0;
        for (const nota of notas) {
          somaNotas += nota;
        }
        const media = somaNotas / notas.length;

        if (media <= 4) {
          console.log("Média: ${media.toFixed(2)}");
          console.log("O aluno está reprovado");
        } else if (4 < media && media < 7) {
          console.log("Informe a média: ${media.toFixed(2)}");
          rl.question("Informe a nota da recuperação: ", (notaRecuperacao) => {
            const mediaRecuperacao = (media + parseFloat(notaRecuperacao)) / 2;
            console.log("Média após a recuperação: ${mediaRecuperacao.toFixed(2)}");
            if (mediaRecuperacao >= 5) {
              console.log("O aluno está aprovado");
            } else {
              console.log("O aluno está reprovado");
            }
            rl.close();
          });
        } else {
          console.log("Média: ${media.toFixed(2)}");
          console.log("O aluno está aprovado");
          rl.close();
        }
      });
    });
  });
}

calcularMedia();