var firstNum = 0;
var secondNum = 0;
let display = "0";
let currOperator = "";

const calculator = document.querySelector("#calculator");
calculator.addEventListener("click", click);

function click(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  if (!isEmpty(e.target.value)) {
    appendDisplay(e.target.value);
  } else if (!isEmpty(e.target.dataset.operator)) {
    if (isEmpty(currOperator)) {
      currOperator = e.target.dataset.operator;
      updateNumber("firstNum");
      display = "";
    } else {
      handleEquals();
      currOperator = e.target.dataset.operator;
    }
  } else if (e.target.dataset.misc == "=") {
    handleEquals();
  } else {
    updateNumber("firstNum");
    misc(e.target.dataset.misc);
  }
}

function appendDisplay(userInput) {
  if (!Number(display)) {
    display = userInput;
  } else if (display.length < 13) {
    display += userInput;
  }
  updateDisplay(display);
}

function updateDisplay(input = display) {
  const displayBar = document.querySelector("#displayBar");
  displayBar.textContent = input;
}

function updateNumber(number) {
  window[number] = Number(display);
}

function handleEquals() {
  updateNumber("secondNum");
  firstNum = operate(currOperator, firstNum, secondNum);
  display = "";
  updateDisplay(firstNum);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function isEmpty(input) {
  if (input) return false;
  else return true;
}

function operate(operator, a, b) {
  switch (operator) {
    case "/":
      return divide(a, b);
    case "x":
      return multiply(a, b);
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
  }
}

function misc(misc) {
  switch (misc) {
    case "C":
      firstNum = "0";
      display = "0";
      currOperator = "";
      updateDisplay();
      break;
    // Negative button does not work
    case "--":
      firstNum *= -1;
      display = firstNum.toString();
      return display;
  }
}
