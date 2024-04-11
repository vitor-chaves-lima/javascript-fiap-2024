function clearInputs() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
}

function getInputValues() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);

  return [n1, n2];
}

function setResult(value) {
  clearInputs();
  const resultSpan = document.getElementById("resultSpan");
  setError("");
  resultSpan.innerText = value;
}

function setError(errorMessage) {
  const errorSpan = document.getElementById("errorSpan");
  errorSpan.innerText = errorMessage;
}

const checkValues = (n1, n2, onValid) => {
  if (isNaN(n1) || isNaN(n2)) {
    setError("Os dois valores devem existir");
    return;
  }

  onValid(n1, n2);
};

function handleSum() {
  const [n1, n2] = getInputValues();
  checkValues(n1, n2, () => {
    const result = n1 + n2;
    setResult(result);
  });
}

function handleSub() {
  const [n1, n2] = getInputValues();
  checkValues(n1, n2, () => {
    const result = n1 - n2;
    setResult(result);
  });
}

function handleMul() {
  const [n1, n2] = getInputValues();
  checkValues(n1, n2, () => {
    const result = n1 * n2;
    setResult(result);
  });
}

function handleDiv() {
  const [n1, n2] = getInputValues();
  checkValues(n1, n2, () => {
    if (n2 === 0) {
      setError("Divisão por 0 não é permitida");
      return;
    }

    const result = n1 / n2;
    setResult(result);
  });
}
