const buttons = document.querySelectorAll('input')
const button1 = document.querySelector('.first');
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

function displayValue() {
  document.querySelector(".output").innerHTML = button1.value;
}

function calculate(){
  
}

//'input' is the name of the trigger
button1.addEventListener('click', displayValue);