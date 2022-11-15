
function ativarcontagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    //ativa a funcao uma vez quando der o tempo especificado
    setTimeout(function() {
        document.getElementById('tempo').innerHTML = "Contou!";
    }, 5000);
}

function pararcontagem(){
    var tempo = setTimeout(function() {
        document.getElementById('tempo').innerHTML = "Contou!";
    }, 5000);

    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "parou a contagem!";
}