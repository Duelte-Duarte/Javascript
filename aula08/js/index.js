/* EVENTOS

onclick = Disparado quando recebe um click.
ondblclick = Disparado quando recebe click duplo.
onmouseover = Disparado quando o mouse está sobre.
onmouseout = Disparado quando o mouse é movido para fora do elemento.
onmousemove = Disparado quando o mouse é movido no elemento.
onmousedown = Disparado quando o click do botao foi pressionado.
onmouseup = Disparado quando o click do botao é liberado.
onfocus = Disparado quando o elemento recebe o foco. Válido para input, .
onchange = Disparado quando existe uma mundança no conteúdo. "Ao mudar".
onblur = Disparado quando o elemento perde o foco.
onkeydown = Disparado quando uma tecla é pressionada.
onkeypress = Disparado quando uma tecla é pressionada e solta.
onkeyup = Disparado quando uma telca é solta sobre um elemento.
onload = Disparado quando a pagina terminou de ser carregada. Body.
onresize = Disparado quando há um redimencionamento da janela.
*/

function eventoclick(){
    alert('Acionou o evento click');
    document.body.style.backgroundColor = "blue";
}

function eventodbclick(){
    alert('Acionou o evento click duplo');
    document.body.style.backgroundColor = "red";
}

function ficarpreto(){
    let cor = document.getElementById('teste');
    cor.style.backgroundColor = "black";
}

function ficarlaranja(){
    let cor = document.getElementById('teste');
    cor.style.backgroundColor = "orange";
}

function limpar() {
    document.getElementById('textocampo').value = "";
}

function mudou() {
    console.log('Mudou');
}