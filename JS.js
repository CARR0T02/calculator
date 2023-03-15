let currNum = "0";
let newNum = "0";
let display = "";

function click(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  if (e.target.value != "") {
    updateNumber();
  } else {
    console.log(e.target.dataset.operator);
  }
}

function updateDisplay(display) {
  const displayBar = document.querySelector("#displayBar");
  displayBar.textContent = display;
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

const calculator = document.querySelector("#calculator");
calculator.addEventListener("click", click);
