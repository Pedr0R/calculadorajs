class Calculadora {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.operation = undefined
  }
  clear() {
    this.currentOperand = ''
    this.prevOperand = ''
    this.operation = undefined
  }
  
  delete() {
  
  }
  
  appendNumber(number) {
    this.currentOperand = number
  }
  
  chooseOperation(operation) {
  
  }
  
  compute() {

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand()
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculadora = new Calculadora(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculadora.appendNumber(button.innerText)
    calculadora.updateDisplay()
  })
})