let produtoPreco = parseFloat(prompt("Digite o preço do produto:"));
let temCupom = prompt("Você tem cupom de desconto? (S/N)").toUpperCase();
let precoFinal = produtoPreco;

if (temCupom === "S") {
    precoFinal = produtoPreco * 0.90; // Aplica 10% de desconto
    console.log("Cupom aplicado!");
}

console.log("Preço final: R$ " + precoFinal.toFixed(2));