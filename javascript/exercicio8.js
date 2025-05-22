let saldo = 500;
let saque = parseFloat(prompt("Quanto você quer sacar?"));

if (saque <= saldo && saque > 0) {
    saldo = saldo - saque; // ou saldo -= saque;
    console.log("Saque aprovado! Novo saldo: R$ " + saldo.toFixed(2));
} else if (saque > saldo) {
    console.log("Saldo insuficiente.");
} else {
    console.log("Valor de saque inválido.");
}
