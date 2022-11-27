let contador = 0;
let input = document.getElementById('text');
let btnadd = document.getElementById('btn');
let main = document.getElementById('area');

function tarefa(){
    // PEGAR O VALOR DIGITADO
    let valor = input.value;

    if ((valor !== "") && (valor !== null) && (valor !== undefined)) {

        ++contador;

        let novoitem = `<div id="${contador}" class="item">
        <div onclick="marcar(${contador})" class="icon">
            <i id="icone_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></i>
        </div>
        <div onclick="marcar(${contador})" class="nome">
            ${valor}
        </div>
        <div class="botao">
            <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`

        main.innerHTML += novoitem;

        //ZERAR CAMPOS
        input.value = "";
        input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcar(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')

    if (classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-checkbox-blank-circle-outline');
        icone.classList.add('mdi-checkbox-marked-circle');

        //JOGAR PARA BAIXO QUANDO CLICAR
        item.parentNode.appendChild(item);
        
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-checkbox-marked-circle');
        icone.classList.add('mdi-checkbox-blank-circle-outline');
    }
}

//ENTRAR COM ENTER
input.addEventListener("keyup", function(event){
    //TECLA DO ENTER É 13
    if (event.keyCode === 13){
        event.preventDefault();
        btnadd.click();
    }
})