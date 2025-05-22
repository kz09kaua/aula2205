let temIngresso = true;
let horarioFilme = 20; // 20:00
let horarioAtual = parseInt(prompt("Qual o horário atual (apenas a hora, ex: 19)?"));

if (temIngresso && horarioAtual <= horarioFilme) {
    console.log("Pode entrar no cinema!");
    if (horarioAtual === horarioFilme) {
        console.log("Corra, o filme está começando!");
    }
} else if (temIngresso && horarioAtual > horarioFilme) {
    console.log("Que pena, você perdeu o filme.");
} else {
    console.log("Você precisa de um ingresso para entrar.");
}
