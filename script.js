const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

const getDisplayValue = () => Number(displayValue);
const getOperand = () => Number(operand);

function clearScreen() {
  display.textContent = '0';
  return displayValue = '';
}

//need to set up event listeners for (each class of) button
const display = document.getElementById('display');
let displayValue = '';

const digits = Array.from(document.getElementsByClassName('digit'));
const operators = Array.from(document.getElementsByClassName('operator'));
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let op = '';
let operand = '';
let answer = 0;

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

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    operand = getDisplayValue();
    op = operator.textContent;
    displayValue = '';
  })
});

equals.addEventListener('click', () => {
  answer = operate(op, getOperand(), getDisplayValue());
  display.textContent = answer;
  op = answer
});