//debugging
const checkVars = () => {
    console.log('memory: ', memory, '\nop: ', op,
                '\noperand: ', operand,
                '\noperand2: ', operand2,
                '\nanswer: ', answer
                )
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const clearMemory = () => memory = '';

function operate(operator, a, b) {
  if (!operator) {
    return answer;
  } else {
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
}

const display = document.getElementById('display');
let memory = '';

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
    if (!memory) {
      display.textContent = digit.textContent;
      memory = digit.textContent;
    } else {
      display.textContent += digit.textContent;
      memory += digit.textContent;
    }
  })
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (!operand) {
      operand = Number(memory);
    } else {
      operand2 = Number(memory);
      answer = operate(op, Number(operand), Number(operand2));
      operand = answer;
      operand2 = 0;
      display.textContent = answer;
    }
    clearMemory();
    op = operator.textContent;
  })
});

equals.addEventListener('click', () => {
  answer = operate(op, Number(operand), Number(operand2) || Number(memory));
  display.textContent = answer;
  operand = answer;
  operand2 = '';
  clearMemory();
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  op = '';
  operand = '';
  operand2 = '';
  answer = 0;
  clearMemory();
})