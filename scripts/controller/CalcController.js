/*ÍNICIO CLASSE CalcController: */
class CalcController { //Representação das regras de negócio do projeto - Onde será definidos as propriedades/chaves e métodos do projeto
    constructor() { //Método construtor definido para a classe
        this._operation = [] //Atributo que irá armazenar a operação aritmética
        this._locale = "pt-br"
        this._displayCalEl = document.querySelector("#display") //Selecionando o elemento com id display
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate // O uso do _ antes do nome da propriedade é usado para altera-lá para private
        this.initialize()
        this.initButtonsEvents()
    }
    /*FIM CLASSE CalcController: */

    /*ÍNICIO DECLARAÇÃO DE MÉTODOS: */
    initialize() { // Método principal que será usado para iniciar a calculadora
        this.setDisplayDateTime() // Chamando o método para que quando aparecer a calculadora a mesma já apareça com o valor atualizado de data e hora
        setInterval(() => { //Método para atualizar a nossa hora a cada 1 segundo. Para que o user veja a hora/min atualizado.
            this.setDisplayDateTime()
        }, 1000)
    }

    addEventListenerAll(element, events, f) { // Método que adiciona vários eventos para um mesmo elemento HTML. Primeiro parâmetro => elemento HTML; Segundo parâmetro são os eventos separados por espaço; Terceiro parâmetro função de callback.

        events.split(" ").forEach((e) => { // transformando os eventos na formato de String para Array com a separador de espaço. Utilizo o forEach para percorrer todos os elementos HTML selecionados e vou adicionando cada evento passado para os mesmos.
            element.addEventListener(e, f, false)
        })

    }

    clearAll() { //Método para implementar a função c da calculadora. Consiste em limpar toda a operação aritmética realizada.
        this._operation = []
    }

    clearEntry() { //Método para implementar a função ce da calculadora. Consiste em apagar a ultima operação aritmética realizada.
        this._operation.pop()
    }

    addOperation(value) { //Método para adicionar uma operação (valor ou sinal) para realizar a funcionalidadena calculadora
        this._operation.push(value)
        console.log(this._operation)
    }

    setError() { //Método para mostrar um erro caso o user não utilize as escolhas abaixo de botões.
        this.displayCalc = "Error"
    }

    execBtn(value) { //Método criado para verificar qual o botão apertado e executar sua respectiva funcionalidade lógica da calculadora
        switch (value) {
            case "ac":
                this.clearAll()
                break
            case "ce":
                this.clearEntry()
                break
            case "soma":

                break
            case "subtracao":

                break
            case "divisao":

                break
            case "multiplicacao":

                break
            case "porcento":

                break
            case "igual":

                break
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.addOperation(parseInt(value)) //Transformando o valor no formato de string para um valor inteiro
                break;
            default:
                this.setError()
                break;
        }

    }
    initButtonsEvents() { //Método para capturar os eventos de click dos botões da calculadora
        let buttons = document.querySelectorAll("#buttons > g, #parts > g") // Estou selecionando todos os elementos filhos dos id's buttons e parts.

        buttons.forEach((btn, index) => { // Percorrendo cada botão do NodeList e adicionando um evento de click. O forEach -> paraCada

            this.addEventListenerAll(btn, "dblclick click mouseover", (element) => { // element é o elemento que recebeu o evento. Esse element vem com suas informações especificas
                let textBtn = btn.className.baseVal.replace("btn-", "") //Armazenando a classe de cada botão de uma forma que fique apenas o nome real
                this.execBtn(textBtn)
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => { // Adicionando os eventos de passagem do mouse para que o cursor do mouse se torne a mãozinha para quando selecionar as teclas da calculadora

                btn.style.cursor = "pointer"

            })
        })
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