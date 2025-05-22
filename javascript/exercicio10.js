let x = 5;
let y = 10;
let z = (x > y) ? x : y;

console.log("O maior valor entre " + x + " e " + y + " é " + z);

x = 20;
z = (x > y) ? x : y;
console.log("Agora, o maior valor entre " + x + " e " + y + " é " + z);
