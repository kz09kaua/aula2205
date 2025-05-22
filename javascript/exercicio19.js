let a = 5, b = 10, c = 2;
let resultadoFinal;

if (a > b || a > c) {
    resultadoFinal = a * (b + c);
    console.log("Condição 1 satisfeita.");
} else if (b > c && b > a) {
    resultadoFinal = b - (a + c);
    console.log("Condição 2 satisfeita.");
} else {
    resultadoFinal = c * c;
    console.log("Nenhuma condição anterior satisfeita.");
}
console.log("Resultado Final: " + resultadoFinal);
