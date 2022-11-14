function soma (valor1, valor2){
    return valor1 + valor2;
}

document.getElementById('texto').innerHTML = soma(10,300);

function realparadolar (real, dolar){
    return real * dolar;
}

var real = 7;
var dolar = 5.39;

document.getElementById('texto1').innerHTML = realparadolar(real, dolar);

function olapessoal(){
    alert("Olá pessoal!");
}

function paracelsius (valorfahrenheit){
    return (5/9) * (valorfahrenheit-32);
}

var x = paracelsius (77);

document.getElementById('texto2').innerHTML = "A temperatura é de "+x+" graus celsius."