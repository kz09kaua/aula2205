let codigoProduto = parseInt(prompt("Digite o código do produto (101, 102, ou 103):"));
let nomeProduto;

switch (codigoProduto) {
    case 101:
        nomeProduto = "Maçã";
        break;
    case 102:
        nomeProduto = "Banana";
        break;
    case 103:
        nomeProduto = "Laranja";
        break;
    default:
        nomeProduto = "Código desconhecido";
}
console.log("Produto: " + nomeProduto);
