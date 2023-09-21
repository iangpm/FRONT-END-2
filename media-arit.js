function mediaArray(ar) {
    var n = ar.length;
    var soma = 0;
    for (var i = 0; i < n; i++) {
    soma += ar[i];
    }
    return soma / n;
   }
   var ar = [1, 3, 9, 15, 90];
   var media = mediaArray(ar);
   console.log("mediaArray: ", media); 

if(media > 7) {
    alert('Parabéns, você passou!')
} else if (media > 4) {
    alert('Você está de recuperação.')
    let nota = prompt('Informe sua nota da prova de recuperação:')
    let soma = (nota + media) / 2
    let resultado = soma >= 5 ? alert('Parabéns, você passou!') : alert('Você reprovou.')
} else {
    alert('Você foi reprovado.')
}