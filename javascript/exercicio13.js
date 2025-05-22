let idade = 22;
let possuiCNH = true;

if (idade >= 18 && possuiCNH) {
    console.log("Pode dirigir.");
} else if (idade >= 18 && !possuiCNH) {
    console.log("Não pode dirigir, falta CNH.");
} else {
    console.log("Não pode dirigir, menor de idade.");
}
