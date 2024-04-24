const speedInput = document.getElementById("speedInput");
const resultSpan = document.getElementById("resultSpan");
const errorSpan = document.getElementById("errorSpan");

const PENALTY_LIMIT = 60;
const PENALTY_VALUE_PER_KILIMETER = (100.0).toFixed(2);

function clearInputs() {
  speedInput.value = "";
}

function getInputValue() {
  const speedInputValue = parseInt(speedInput.value);
  return speedInputValue;
}

function setError(errorMessage) {
  errorSpan.innerText = errorMessage;
}

function setResult(penaltyValue, kilometersExceeded) {
  clearInputs();
  setError("");
  const currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  resultSpan.innerText =
    kilometersExceeded === 0
      ? "Você não foi multado"
      : `Você foi multado em ${currencyFormatter.format(
          penaltyValue
        )} por ultrapassar ${kilometersExceeded} Km/h`;
}

const checkValues = (bookAmount, onValid) => {
  if (isNaN(bookAmount)) {
    setError("Quantidade inválida");
    return;
  }

  onValid(bookAmount);
};

function getResult() {
  const speed = getInputValue();

  checkValues(speed, () => {
    if (speed >= PENALTY_LIMIT) {
      const kilometersExceeded = speed - PENALTY_LIMIT;
      var penaltyValue = kilometersExceeded * PENALTY_VALUE_PER_KILIMETER;

      setResult(penaltyValue, kilometersExceeded);
    } else {
      setResult(0, 0);
    }
  });
}
