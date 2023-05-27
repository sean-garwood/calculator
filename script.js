//debugging
const checkVars = () => {
    console.log('displayValue: ', displayValue, '\nop: ', op,
                '\noperand: ', operand,
                '\noperand2: ', operand2,
                '\nanswer: ', answer
                )
}

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

const display = document.getElementById('display');
let displayValue = '';

const digits = Array.from(document.getElementsByClassName('digit'));
const operators = Array.from(document.getElementsByClassName('operator'));
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let op = '';
let operand = '';
let operand2 = '';
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
    op = operator.textContent;
    if (!operand) {
      operand = Number(displayValue);
      displayValue = '';
    } else {
      operand2 = Number(displayValue);
      answer = operate(op, Number(operand), Number(operand2));
      display.textContent = answer;
      displayValue = '';
    }
  })
});

equals.addEventListener('click', () => {
  answer = operate(op, Number(operand), Number(operand2));
  display.textContent = answer;
  operand = answer;
  operand2 = '';
});

clear.addEventListener('click', () => {
    display.textContent = '0';
    displayValue = '';
    op = '';
    operand = '';
    operand2 = '';
    answer = 0;
})