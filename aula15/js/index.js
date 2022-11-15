
class carro {
    constructor (valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " buzinou: biiiiiiiiiiiiiiii"
    }
}

const uno = new carro("Fiat", "Uno", 2001);
const gol = new carro("Volkswagen", "gol", 2013);

document.getElementById('texto').innerHTML = uno;
document.getElementById('texto2').innerHTML = gol;