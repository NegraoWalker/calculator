class CalcController { //Representação das regras de negócio do projeto
    constructor() { //Método construtor definido para a classe
        this._locale = "pt-br"
        this._displayCalEl = document.querySelector("#display") //Selecionando o elemento com id display
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate // O uso do _ antes do nome da propriedade é usado para altera-lá para private
        this.initialize()
    }



    initialize() { // Método principal que será usado para iniciar a calculadora
        this.setDisplayDateTime() // Chamando o método para que quando aparecer a calculadora a mesma já apareça com o valor atualizado de data e hora
        setInterval(() => { //Método para atualizar a nossa hora a cada 1 segundo. Para que o user veja a hora/min atualizado.
            this.setDisplayDateTime()
        }, 1000)
    }

    setDisplayDateTime() { // Método que define o nosso locale no formato do Brasil
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
        this.displayDate = this.currentDate.toLocaleDateString(this.locale)
    }

    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value // Definindo uma localidade através do toLocaleTimeString para apresentação da hora atual
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }

    get displayCalc() {
        return this._displayCalEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalEl.innerHTML = value
    }

    get currentDate() {
        return new Date() // Pegando a data atual do nosso computador a partir da classe Date()
    }

    set currentDate(value) {
        this._currentDate = value
    }

}