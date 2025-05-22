let valorCompra = 120.00;
let categoriaCliente = "OURO"; // Poderia ser "PRATA" ou "BRONZE"
let desconto = 0;

if (categoriaCliente === "OURO") {
    desconto = valorCompra * 0.15; // 15%
} else if (categoriaCliente === "PRATA") {
    desconto = valorCompra * 0.10; // 10%
} else {
    desconto = valorCompra * 0.05; // 5% para BRONZE ou outros
}

let valorFinal = valorCompra - desconto;
console.log("Valor original: R$" + valorCompra.toFixed(2));
console.log("Desconto: R$" + desconto.toFixed(2));
console.log("Valor final: R$" + valorFinal.toFixed(2));
