var input = document.querySelector(".input");
var items = Array.from(document.querySelectorAll(".caculate-board button"));

let currentInput = "";
let resultDisplayed = false;

items.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === "0") {
      // Nếu là số
      if (resultDisplayed) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "X" ||
      value === "/"
    ) {
      // Nếu là toán tử
      currentInput += value;
    } else if (value === "=") {
      try {
        const expression = currentInput.replace(/X/g, "*").replace(/÷/g, "/");
        const result = eval(expression);
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        currentInput = "Error";
      }
    } else if (value === "C") {
      currentInput = "";
    }

    input.textContent = currentInput || "0";
  });
});
