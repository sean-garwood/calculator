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

function operate(operator, a, b) {
  switch (operator) {
    case 'add':
      return add(a, b);
      break;
    case 'subtract':
      return subtract(a, b);
      break;
    case 'multiply':
      return multiply(a, b);
      break;
    case 'divide':
      return divide(a, b);
  }
}

//Create the functions that populate the display when you click the number
//buttons.

//need to set up event listeners for (each class of) button

const digits = Array.from(document.getElementsByClassName('digit'));
const display = document.getElementById('display');

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    display.textContent = digit.textContent;
  })
});