


function calculaHoras() {

    var hEntrada = new Date("01/01/1990 " + document.getElementById("primeiraentrada").value + ":00");
    var hSaidaIntervalo = new Date("01/01/1990 " + document.getElementById("primeirasaida").value + ":00");
    var hVoltaIntervalo = new Date("01/01/1990 " + document.getElementById("segundaentrada").value + ":00");
    var hSaida = new Date("01/01/1990 " + document.getElementById("segundasaida").value + ":00");
    var hTotal = new Date("01/01/1990 00:00:00")
    var hIntervalo = new Date("01/01/1990 00:00:00")

    //hIntervalo.setHours(hSaidaIntervalo.getHours() - hVoltaIntervalo.getHours())
    //hIntervalo.setMinutes(hSaidaIntervalo.getMinutes() - hVoltaIntervalo.getMinutes())

    hTotal.setHours(hSaida.getHours() - hEntrada.getHours())
    hTotal.setMinutes(hSaida.getMinutes() - hEntrada.getMinutes())
    alert("Horas Trabalhadas :" + hTotal.getHours() + ":" + hTotal.getMinutes())
    //alert("Horas Intervalo :" + hIntervalo.getHours() + ":" + hIntervalo.getMinutes())

    /*
    if (hTotal.getHours() > 10) {
        document.getElementById("hora").value = hTotal + " horas Totais - PASSOU DE 10 HORAS"
    }

    if (hIntervalo.getHours() < 1) {
        document.getElementById("hora").value = hIntervalo + " minutos de intervalo - INTERVALO MENOR QUE 1 HORA"
    }

    if (hIntervalo > 2) {
        document.getElementById("hora").value = hIntervalo + " horas de intervalo - INTERVALO MAIOR QUE DUAS HORAS"
    } 
    */
}
