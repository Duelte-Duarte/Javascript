
function ativarcontagem(){
    
    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 500);
}

function pararcontagem(){
    clearInterval(tempo);
}

function ativarcontagem2(){
    
    tempo2 = setInterval(function() {
        var cronometro = document.getElementById('tempo2').innerHTML;
        var soma = parseInt(cronometro) - 1;
        if (soma == 0){
            document.getElementById('tempo2').innerHTML = "tempo acabou";
            pararcontagem2();
        } else {
            document.getElementById('tempo2').innerHTML = soma;
        }
    }, 500);
}

function pararcontagem2(){
    clearInterval(tempo2);
}