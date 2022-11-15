// for (let i=0; i<10001; i++){
//     document.getElementById('texto').innerHTML += i + ", ";
// }

var ano = new Date().getFullYear();

for (let i=1900; i<=ano; i++){
    document.getElementById('ano').innerHTML += "<Option value = '" +i+ "' > " +i+ "</Option>";
}

const carros = ["gol", "fusca", "camaro", "chevete", "prisma", "hb20", "kwid"];
var tamanho = carros.length;

for (let i=0; i < tamanho; i++){
    document.getElementById('texto').innerHTML += carros[i] + " - ";
}