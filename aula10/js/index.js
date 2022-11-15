var tomada = "on";

if (tomada == "on"){
    alert("A lampada está ligada");
} else {
    alert("A lampada está desligada");
}

var hora = new Date(). getHours();

if (hora < 12) {
    alert("Bom dia")
} else if (hora < 18) {
    alert("Boa tarde")
} else {
    alert("Boa noite")
}

function validar(){
    let nome = document.getElementById('nome').value;

    // if (nome =="" || nome == null){
    //     document.getElementById('texto').innerHTML = "O campo não pode ser vazio"
    // }

    if (nome =="" || nome == null){
        let p = document.getElementById('texto');
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById('texto');
        p.innerHTML = "Parabéns, tudo certinho";
        p.style.color = "green";
    }
}