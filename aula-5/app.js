const resultP = document.getElementById("result");
const jokeipoOptions = ["Pedra", "Papel", "Tesoura"];

function getMachineSelection() {
  const randomNumber = Math.floor(Math.random() * jokeipoOptions.length);
  return jokeipoOptions[randomNumber];
}

function getUserSelection(selection) {
  verifyResult(selection);
}

function verifyResult(userSelection) {
  const machineSelection = getMachineSelection();
  let result = "EMPATOU";

  if (
    (userSelection === "Pedra" && machineSelection === "Tesoura") ||
    (userSelection === "Papel" && machineSelection === "Pedra") ||
    (userSelection === "Tesoura" && machineSelection === "Papel")
  ) {
    result = "O USUÁRIO ganhou!";
  } else if (
    (machineSelection === "Pedra" && userSelection === "Tesoura") ||
    (machineSelection === "Papel" && userSelection === "Pedra") ||
    (machineSelection === "Tesoura" && userSelection === "Papel")
  ) {
    result = "O COMPUTADOR ganhou!";
  }

  const resultString = `Usuário: ${userSelection} | Computador: ${machineSelection} => ${result}`;
  resultP.innerText = resultString;
}
