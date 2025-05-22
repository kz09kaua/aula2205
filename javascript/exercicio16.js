let num = parseFloat(prompt("Digite um número:"));
let classificacao;

if (num > 0) {
    classificacao = "Positivo";
} else if (num < 0) {
    classificacao = "Negativo";
} else {
    classificacao = "Zero";
}
console.log("O número é " + classificacao);
