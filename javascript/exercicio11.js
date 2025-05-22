let loginCorreto = "usuario123";
let senhaCorreta = "senhaSegura";

let loginUser = prompt("Login:");
let senhaUser = prompt("Senha:");

if (loginUser === loginCorreto && senhaUser === senhaCorreta) {
    console.log("Login bem-sucedido!");
} else {
    console.log("Credenciais incorretas.");
}
