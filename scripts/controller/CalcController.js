class CalcController { //Representação das regras de negócio do projeto
    constructor() { //Método construtor definido para a classe
        this._displayCalc = "0" // O uso do _ antes do nome da propriedade é usado para altera-lá para private.
        this._dataAtual
    }

    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(valor) {
        this._displayCalc = valor
    }

    get dataAtual() {
        return this._dataAtual
    }

    set dataAtual(valor) {
        this._dataAtual = valor
    }

}