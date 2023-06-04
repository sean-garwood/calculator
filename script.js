//debugging
const checkVars = () => {
    console.log('memory: ', memory, '\nop: ', op,
                '\noperand: ', operand,
                '\nanswer: ', answer
                )
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const clearMemory = () => {
  memory = '';
  operand = answer;
  op = '';
}

function operate(operator, a, b) {
  if (!operator) {
    return answer;
  } else {
    switch (operator) {
      case '+':
        return +add(a, b).toFixed(9);
      case '-':
        return +subtract(a, b).toFixed(9);
      case '*':
        return +multiply(a, b).toFixed(9);
      case '/':
        return +divide(a, b).toFixed(9);
    }
  }
}

const display = document.getElementById('display');
const digits = Array.from(document.getElementsByClassName('digit'));
const operators = Array.from(document.getElementsByClassName('operator'));
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let memory = '';
let op = '';
let operand = 0;
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
      memory = '';
    } else {
      answer = operate(op, operand, Number(memory));
      display.textContent = answer;
      clearMemory();
    }
    op = operator.textContent;
  })
});

equals.addEventListener('click', () => {
  answer = operate(op, operand, Number(memory));
  display.textContent = answer;
  clearMemory();
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  answer = 0;
  clearMemory();
})