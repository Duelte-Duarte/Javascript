//data normal
let data = new Date();
console.log(data);

//ano
let ano = new Date().getFullYear();
console.log(ano);

//mes - pegando de 0 a 11, sendo 0 janeiro e 11 dezembro
let mes = new Date().getMonth();
console.log(mes);

//mes normal
const mesesdoano = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesescrito = mesesdoano[new Date().getMonth()];
console.log(mesescrito);

//dia
let dia = new Date().getDate();
console.log(dia);

//dia semana
let semana = new Date().getDay();
console.log(semana);

//dia semana extenso
const diasemana = ["domingo", "segunda", "terça", "qaurta", "quinta", "sexta", "sabado"];
let semanaescrito = diasemana[new Date().getDay()];
console.log(semanaescrito);

//hora
let hora = new Date().getHours();
console.log(hora);

//minutos
let minutos = new Date().getMinutes();
console.log(minutos);

//segundos
let segundos = new Date().getSeconds();
console.log(segundos);

//milisegundos
let milisegundos = new Date().getMilliseconds();
console.log(milisegundos);

//padrao br
let databr = new Date().toLocaleDateString('pt-br');
console.log(databr);

//padrao br hora
let databrh = new Date().toLocaleString('pt-br');
console.log(databrh);

//comparar datas
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);
if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não venceu")
}

//diferenca entre datas
var datainicial = new Date();
var datafinal = new Date(2022, 11, 31);
var diferencaen = datafinal.getTime() - datainicial.getTime();