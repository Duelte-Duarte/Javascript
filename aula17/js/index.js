const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
    motor: ["1.6","1.4","1.0"]
}

//CONVERTER EM TEXTO
let txt = JSON.stringify(carro);

document.getElementById('texto').innerHTML = txt;

//CONVERTER EM OBJETO
let obj = JSON.parse(txt);

console.log(obj.modelo);