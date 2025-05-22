let numero = parseInt(prompt("Digite um número:"));
let mensagem;

if (numero % 2 === 0) {
    mensagem = "O número é PAR.";
} else {
    mensagem = "O número é ÍMPAR.";
}
console.log(mensagem);