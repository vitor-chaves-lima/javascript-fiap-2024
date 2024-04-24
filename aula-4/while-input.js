function login() {
  let username;

  while (true) {
    username = prompt("Digite o nome de usuário");
    password = prompt("Digite a senha");

    const isUsernameValid =
      username && username.trim().length > 0 && username === "12345";

    const isPasswordValid =
      username && password.trim().length > 0 && password === "12345";

    if (isUsernameValid && isPasswordValid) {
      break;
    }

    alert("Credenciais inválidas");
  }

  console.log("Usuário autenticado");
}
