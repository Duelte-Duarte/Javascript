
const pessoa = ["Duelte", "Glebchen", 28]; //array
const comida = ["arroz", "feijao"];
const tudo = pessoa.concat(comida);
// const pessoa = {nome:"Duelte", sobrenome:"Glebchen", idade: 30}; //objeto
pessoa.push("Brasileiro") //acrescenta mais um item no final
pessoa.pop(); //retira o ultimo da lista
pessoa.shift(); //remove o primeiro da lista
pessoa.unshift("Bonitão"); //altera o primeiro da lista
pessoa.splice(1, 0, "adcionar1", "adcionar2"); //escolhe qual alterar, se remove ou nao, e adciona
// alert(pessoa.nome);
// alert(pessoa{0});

// alert(pessoa.length);
// alert(pessoa[pessoa.length -1])


document.getElementById('texto').innerHTML = pessoa.join(" - ");
document.getElementById('texto2').innerHTML = tudo;

const jogadores = ["gabi", "bruno", "pele", "maradona", "vampeta", "yuri"];
const craques = jogadores.slice(2,4);
const jogaordem = jogadores.sort(); //coloca em ordem por nome

document.getElementById('texto3').innerHTML = craques;

const numeros = [10, 30, 100, 50, 25, 5]
numeros.sort(function(a,b) {return a-b});

document.getElementById('texto4').innerHTML = numeros;