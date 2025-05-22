let pontuacao = 750;
let statusJogador = "ATIVO"; // Poderia ser "INATIVO"
let podeJogarRankeada = false;

if (statusJogador === "ATIVO" && pontuacao >= 1000) {
    podeJogarRankeada = true;
    console.log("Você tem pontos suficientes e está ativo para partidas ranqueadas.");
} else if (statusJogador === "ATIVO" && pontuacao < 1000) {
    console.log("Você está ativo, mas precisa de mais " + (1000 - pontuacao) + " pontos para ranqueadas.");
} else {
    console.log("Seu status de jogador é: " + statusJogador + ". Não pode jogar ranqueadas.");
}

if (podeJogarRankeada) {
    console.log("Boa sorte nas partidas ranqueadas!");
}
