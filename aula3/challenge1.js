const bookAmountInput = document.getElementById("bookAmount");
const resultSpan = document.getElementById("resultSpan");
const errorSpan = document.getElementById("errorSpan");

const normalPrice = (22.0).toFixed(2);
const discountPrice = (15.0).toFixed(2);

function clearInputs() {
  bookAmountInput.value = "";
}

function getInputValue() {
  const bookAmountValue = parseInt(bookAmountInput.value);
  return bookAmountValue;
}

function setResult(value, discount) {
  clearInputs();
  setError("");
  resultSpan.innerText = `R$ ${value.toFixed(2)} 
  \n${
    discount
      ? `Você comprou 7 livros ou mais ( Cada livro custou R$ ${discountPrice})"`
      : `Cada livro custou R$ ${normalPrice}`
  }`;
}

function setError(errorMessage) {
  errorSpan.innerText = errorMessage;
}

const checkValues = (bookAmount, onValid) => {
  if (isNaN(bookAmount)) {
    setError("Quantidade inválida");
    return;
  }

  onValid(bookAmount);
};

function getResult() {
  const bookAmount = getInputValue();

  checkValues(bookAmount, () => {
    var totalPrice;
    const discount = bookAmount >= 7;

    if (discount) {
      totalPrice = discountPrice * bookAmount;
    } else {
      totalPrice = normalPrice * bookAmount;
    }

    setResult(totalPrice, discount);
  });
}
