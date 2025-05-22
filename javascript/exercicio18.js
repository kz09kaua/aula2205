let nivelAcesso = prompt("Qual seu nível de acesso? (admin/user/guest)").toLowerCase();
let mensagemBoasVindas;

switch (nivelAcesso) {
    case "admin":
        mensagemBoasVindas = "Acesso total concedido, Administrador!";
        break;
    case "user":
        mensagemBoasVindas = "Bem-vindo, Usuário! Acesso padrão.";
        break;
    case "guest":
        mensagemBoasVindas = "Olá, Visitante! Acesso limitado.";
        break;
    default:
        mensagemBoasVindas = "Nível de acesso não reconhecido.";
}
console.log(mensagemBoasVindas);
