const numberButtons = document.querySelectorAll("[data-numbers]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    };

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    calculate() {
        let result;
        const previousOperandNumber = Number(this.previousOperand);
        const currentOperandNumber = Number(this.currentOperand);

        if (isNaN(previousOperandNumber) || isNaN(currentOperandNumber)) return;

        switch (this.operation) {
            case "+": result = previousOperandNumber + currentOperandNumber; break;
            case "-": result = previousOperandNumber - currentOperandNumber; break;
            case "/": result = previousOperandNumber / currentOperandNumber; break;
            case "*": result = previousOperandNumber * currentOperandNumber; break;    
            default: return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";
    }

    chooseOperation(operation) {
        if (this.currentOperand == "") return;
        if (this.previousOperand != "") {
            this.calculate();
        } 
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    appendNumber(number) {
        if (this.currentOperand.includes(".") && number == ".") return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`
    }

    clear() {
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
    };

    updateDisplay() {
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation || ""}`;
        this.currentOperandTextElement.innerText = this.currentOperand;
    };
};

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement);

for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", () =>{
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    });
};

for ( const operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", () => {
        calculator.chooseOperation(operatorButton.innerText);
        calculator.updateDisplay();
    });
};

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})