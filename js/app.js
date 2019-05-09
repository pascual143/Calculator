let firstNumber  = ''
let secondNumber = ''
let operator = ''

function setup() {
  const numbers = document.querySelectorAll('.number')
  const display = document.querySelector('.display')
  const operators = document.querySelectorAll('.operator')
  const equals = document.querySelector('.eq')
  const clear = document.querySelector('.clear')
  console.log(numbers)

  function getNumber(e) {
    const value = e.target.value
    setNumber(value)
    display.value = value
  }

  function setNumber(value) {
    if(typeof firstNumber !== 'number') { // Check if firstNumber has already been assigned
      firstNumber = parseFloat(value) // If it hasn't, assign the value to firstNumber
    } else {
      secondNumber = parseFloat(value) // Else assign the value to secondNumber
    }
  }

  function getOperator(e) {
    operator = e.target.value
  }

  function calculate() {
    switch (operator) {
      case '+':
        display.value = firstNumber + secondNumber
        break
      case '-':
        display.value = firstNumber - secondNumber
        break
      case '/':
        display.value = firstNumber / secondNumber
        break
      case 'x':
        display.value = firstNumber * secondNumber
        break
    }
  }

  function clearScreen() {
    firstNumber = ''
    secondNumber = ''
    operator = ''
    display.value = ''
  }

  numbers.forEach(numberBtn => numberBtn.addEventListener('click', getNumber))
  operators.forEach(operatorBtn => operatorBtn.addEventListener('click', getOperator))
  equals.addEventListener('click', calculate)
  clear.addEventListener('click', clearScreen)
}

window.addEventListener('DOMContentLoaded', setup)
