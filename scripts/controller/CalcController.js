class CalcController { //Representação das regras de negócio do projeto
    constructor() { //Método construtor definido para a classe
        this._displayCalc = "0" // O uso do _ antes do nome da propriedade é usado para altera-lá para private.
        this._currentDate
        this.initialize()
    }

    initialize() { // Método principal que será usado para iniciar a calculadora
        let displayCalEl = document.querySelector("#display")
        let dateEl = document.querySelector("#data")
        let timeEl = document.querySelector("#hora")

        displayCalEl.innerHTML = 1000
        dateEl.innerHTML = "19/06/2022"
        timeEl.innerHTML = "19:36"
    }
    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(value) {
        this._displayCalc = value
    }

    get currentDate() {
        return this._currentDate
    }

    set currentDate(value) {
        this._currentDate = value
    }

}