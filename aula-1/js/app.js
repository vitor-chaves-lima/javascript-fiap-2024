// alert("Hello World");
// prompt("Digite seu nome");
// confirm("Você deseja sair?");

// console.debug("DEBUG");
// console.log("LOG");
// console.info("INFO");
// console.warn("WARN");
// console.error("ERROR");

let username = prompt("Digite seu nome");
let age = parseInt(prompt("Digite sua idade"));
let profession = prompt("Digite sua profissão");

console.log(
  `Olá ${username}, você tem ${age} anos e trabalha como ${profession}`
);

console.log(typeof age);
