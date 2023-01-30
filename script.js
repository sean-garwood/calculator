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

function getDisplayValue() {
  return Number(displayValue);
}

function clearScreen() {
  display.textContent = '0';
  return displayValue = '';
}

//need to set up event listeners for (each class of) button
const display = document.getElementById('display');
let displayValue = '';

const digits = Array.from(document.getElementsByClassName('digit'));
const operators = Array.from(document.getElementsByClassName('operator'));
const equals = document.getElementById('equal');
const clear = document.getElementById('clear');

digits.forEach(digit => {
  digit.addEventListener('click', () => {
    if (!displayValue) {
      display.textContent = digit.textContent;
      displayValue = digit.textContent;
    } else {
      display.textContent += digit.textContent;
      displayValue += digit.textContent;
    }
  })
});