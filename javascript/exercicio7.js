let diaSemana = parseInt(prompt("Digite um número de 1 (Domingo) a 7 (Sábado):"));
let tipoDia;

switch (diaSemana) {
    case 1:
    case 7:
        tipoDia = "Fim de semana";
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        tipoDia = "Dia útil";
        break;
    default:
        tipoDia = "Dia inválido";
        break;
}
console.log(tipoDia);
