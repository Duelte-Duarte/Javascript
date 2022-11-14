var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor3 = valor1 + valor2 ;

document.getElementById('texto').innerHTML = valor3;

var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor3 = valor1 - valor2 ;

document.getElementById('texto2').innerHTML = valor3;

var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor3 = valor1 / valor2 ;

document.getElementById('texto3').innerHTML = valor3;

var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor3 = ++ valor1 ;

document.getElementById('texto4').innerHTML = "O valor 1 ficou: " + valor3;

var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor3 = -- valor1 ;

document.getElementById('texto5').innerHTML = "O valor 1 ficou: " + valor3;

var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor1 += valor2;
// a mesma coisa de valor1 = valor1 + valor2;

document.getElementById('texto6').innerHTML = "O valor 1 ficou: " + valor1;

var valor1, valor2, valor3;

valor1 = 5;
valor2 = 2;
valor1 -= valor2;
// a mesma coisa de valor1 = valor1 - valor2;

document.getElementById('texto7').innerHTML = "O valor 1 ficou: " + valor1;

var valor1, valor2, total;

valor1 = "Duelte ";
valor2 = "Glebchen";
total = valor1 + valor2 ;

document.getElementById('texto8').innerHTML = total;

var valor1, valor2, total;

valor1 = 8;
valor2 = 10;
total = (valor1 == valor2) ;

document.getElementById('texto9').innerHTML = total;

var valor1, valor2, total;

valor1 = 8;
valor2 = "8";
total = (valor1 === valor2) ;
// verifica se é o mesmo valor e o tipo
document.getElementById('texto10').innerHTML = total;

var valor1, valor2, total;

valor1 = 8;
valor2 = 10;
total = (valor1 != valor2) ;
// significa diferente ou nao igual
document.getElementById('texto11').innerHTML = total;

var idade, eleitor;
idade = 18;
eleitor = (idade<18) ? "não eleitor":"sim, eleitor!"

document.getElementById('texto13').innerHTML = eleitor;

var idade, eleitor, resultado;
idade = 18;
eleitor = (idade<18) ? "não eleitor":"sim, eleitor!"
resultado = (idade > 60 && idade < 70);

document.getElementById('texto14').innerHTML = resultado;

var idade, eleitor, resultado;
idade = 60;
eleitor = (idade<18) ? "não eleitor":"sim, eleitor!"
resultado = (idade == 60 || idade == 70);
// significa ou
document.getElementById('texto15').innerHTML = resultado;

var idade, eleitor, resultado;
idade = 60;
eleitor = (idade<18) ? "não eleitor":"sim, eleitor!"
resultado = !(idade == 60);
// significa negação. Negando tudo
document.getElementById('texto16').innerHTML = resultado;