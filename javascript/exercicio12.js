let numeroSorteado = 7;
let palpite = parseInt(prompt("Adivinhe o número (1 a 10):"));
if (palpite === numeroSorteado) {
    console.log("Parabéns! Você acertou!");
} else if (palpite < numeroSorteado) {
    console.log("Seu palpite foi baixo. Tente um número maior.");
} else {
    console.log("Seu palpite foi alto. Tente um número menor.");
}