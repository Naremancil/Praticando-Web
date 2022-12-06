const currentText = document.querySelector("#current-result")
const previousText = document.querySelector("#previous-result")
const button = document.querySelectorAll("#button-container button")

// console.log(button, previousText, currentText) -> teste de querys

// criação do objeto calculadora
class Calculadora{
    // construtor para setar e zerar valores
    constructor(currentText, previousText){
        this.currentText = currentText
        this.previousText = previousText
        this.currentValue = ""
    }

    getNumber(value){
        if(this.currentText.innerText.includes(",") && value === ","){
            return;
        }
        this.currentValue = value
        this.updateScreen();
    }

    getOperation(operation){
        if(this.currentText.innerText === "" && operation !== "C"){
            if(this.previousText.innerText !== ""){
                this.changeOperation(operation)
            }
            return;
        }
        let result
        const current = +this.currentText.innerText
        const previous = +this.previousText.innerText.split(" ")[0]

        switch(operation){
            case "+":
                result = previous + current
                this.updateScreen(current, operation, previous, result)
                break;
            case "-":
                result = previous - current
                this.updateScreen(current, operation, previous, result)
                break;
            case "X":
                result = previous * current
                this.updateScreen(current, operation, previous, result)
                break;
            case "/":
                result = previous / current
                this.updateScreen(current, operation, previous, result)
                break;
            default: return;
        }
    }

    changeOperation(operation){
        const possibleOperations = ["X", "-", "+", "/"]

        if(!possibleOperations.includes(operation)){
            return;
        }

        this.previousText.innerText = this.previousText.innerText.slice(0, -1) + operation;
    }

    updateScreen(current = null, operation = null, previous = null, result = null){
        if(result === null){
            this.currentText.innerText += this.currentValue
        } else {
            if(previous === 0){
                result = current
            }
            this.previousText.innerText = `${result} ${operation}`
            this.currentText.innerText = ""
        }
    }
}

const calculator = new Calculadora(currentText, previousText);

button.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const value = evento.target.innerText
        //console.log(value) -> teste de valores pegos

        // validação de numeral ou operador
        if(value >= 0 || value === ","){
            //console.log("peguei um valor")
            calculator.getNumber(value)
        } else {
            //console.log("peguei um operador")
            calculator.getOperation(value)
        }
    })
})