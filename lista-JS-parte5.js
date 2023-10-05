//Lista JS
//Exercício 5
function calcularcirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    return {
        area: area,
        perimetro: perimetro
    };
}

let raio = parseFloat(prompt("Informe o raio do círculo: "));
let resultado = calcularcirculo(raio);

console.log(`A área do círculo é de ${resultado.area.toFixed(2)} cm²`);
console.log(`O perímetro do círculo é de ${resultado.perimetro.toFixed(2)} cm`);