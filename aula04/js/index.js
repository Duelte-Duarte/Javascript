var a,b,c;

a = 1;
b = 2;
c = a + b;

alert(c);

var nome, sobrenome, completo;

nome = "Duelte";
sobrenome = "Glebchen";
completo = nome + " " + sobrenome;

document.getElementById('texto').innerHTML = completo;

// DIFERENÇAS

/* LET não permite a redeclaração de variáveis

    let pessoa = "Duelte";
    let pessoa = "BRuno";
*/

/* CONST nunca muda, é constante
    const x = 10

    {
        const x = 10
    }