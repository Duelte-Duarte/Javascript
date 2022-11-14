const carro = { 
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () {
        alert('biiiiiiiiiiiiiiiiiiii')
    },
    completo: function() {
        return "A marca do carro é " + this.marca + " e o modelo é " + this.modelo ;
    }
}

document.getElementById('texto').innerHTML= carro.completo();
document.getElementById('texto1').innerHTML= carro.buzina();