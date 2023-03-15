function hovering(e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.classList.toggle("hovering");
  }
}

const calculator = document.querySelector("#calculator");
calculator.addEventListener("mouseover", hovering);

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("mouseleave", hovering);
}
