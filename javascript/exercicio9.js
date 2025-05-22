let nota = parseFloat(prompt("Digite a nota do aluno (0 a 10):"));
let statusAluno;

if (nota >= 7.0 && nota <= 10.0) {
    statusAluno = "Aprovado";
} else if (nota >= 5.0 && nota < 7.0) {
    statusAluno = "Recuperação";
} else if (nota >= 0.0 && nota < 5.0) {
    statusAluno = "Reprovado";
} else {
    statusAluno = "Nota inválida";
}
console.log("Status: " + statusAluno);
