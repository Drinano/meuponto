
//Abre modal das regras
const openModalButton = document.querySelector("#regras");
const closeModalButton = document.querySelector("#fecha-modal-regras");
const modal = document.querySelector("#modal-regras");
const fade = document.querySelector("#fade-regras");

const toggleModal = () => {
    modal.classList.toggle("hide-regras");
    fade.classList.toggle("hide-regras");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

const openModalButtonC = document.querySelector("#calculo");
const closeModalButtonC = document.querySelector("#fecha-modal-calculo");
const modalC = document.querySelector("#modal-calculo");
const fadeC = document.querySelector("#fade-calculo");

const toggleModalC = () => {
    modalC.classList.toggle("hide-calculo");
    fadeC.classList.toggle("hide-calculo");
};

[openModalButtonC, closeModalButtonC, fadeC].forEach((el) => {
    el.addEventListener("click", () => toggleModalC());
});

function calculaHoras() {

    //Recebe as datas inseridas na página
    var entrada = new Date("01/01/1990 " + document.getElementById("primeiraentrada").value + ":00");
    var saidaIntervalo = new Date("01/01/1990 " + document.getElementById("primeirasaida").value + ":00");
    var voltaIntervalo = new Date("01/01/1990 " + document.getElementById("segundaentrada").value + ":00");
    var saida = new Date("01/01/1990 " + document.getElementById("segundasaida").value + ":00");

    //Pega os valores separados por hora e minuto de cada hora inserida
    var horaEntrada = entrada.getHours()
    var minutoEntrada = entrada.getMinutes()

    var horaSaidaIntervalo = saidaIntervalo.getHours()
    var minutoSaidaIntervalo = saidaIntervalo.getMinutes()

    var horaVoltaIntervalo = voltaIntervalo.getHours()
    var minutoVoltaIntervalo = voltaIntervalo.getMinutes()

    var horaSaida = saida.getHours()
    var minutoSaida = saida.getMinutes()

    //Calcula as horas do primeiro periodo
    var horaManha = horaSaidaIntervalo - horaEntrada

    if (minutoEntrada > minutoSaidaIntervalo) {
        var minutoRestanteEntrada = 60 - minutoEntrada
        var minutoManha = minutoRestanteEntrada + minutoSaidaIntervalo
        horaManha = horaManha - 1
    }

    if (minutoEntrada <= minutoSaidaIntervalo) {
        var minutoManha = minutoSaidaIntervalo - minutoEntrada
    }

    //Calcula as horas do segundo periodo
    var horaTarde = horaSaida - horaVoltaIntervalo

    if (minutoVoltaIntervalo > minutoSaida) {
        var minutoRestanteVoltaIntervalo = 60 - minutoVoltaIntervalo
        var minutoTarde = minutoRestanteVoltaIntervalo + minutoSaida
        horaTarde = horaTarde - 1
    }

    if (minutoVoltaIntervalo <= minutoSaida) {
        var minutoTarde = minutoSaida - minutoVoltaIntervalo
    }

    //Calcula as horas do intervalo
    var horaIntervalo = horaVoltaIntervalo - horaSaidaIntervalo

    if (minutoVoltaIntervalo < minutoSaidaIntervalo) {
        var minutoRestanteIntervalo = 60 - minutoSaidaIntervalo
        var minutoIntervalo = minutoRestanteIntervalo + minutoVoltaIntervalo
        horaIntervalo = horaIntervalo - 1
    }

    if (minutoVoltaIntervalo >= minutoSaidaIntervalo) {
        var minutoIntervalo = minutoVoltaIntervalo - minutoSaidaIntervalo
    }

    //Calcula as horas totais
    horaTotal = horaManha + horaTarde
    minutoTotal = minutoManha + minutoTarde

    if (minutoTotal > 60) {
        horaTotal = horaTotal + 1
        minutoTotal = minutoTotal - 60
    }

    if (minutoTotal == 60) {
        horaTotal = horaTotal + 1
        minutoTotal = 0
    }

    /*
    if(horaTotal < 10){
        horaTotal = "0" + horaTotal
    }

    if(minutoTotal < 10){ 
        minutoTotal = "0" + minutoTotal
    }
    */

}