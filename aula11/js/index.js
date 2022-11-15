/* switch

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.
*/

switch (expressao){
    case a:
        //o que acontece
        break;
    
    case b:
        //o que acontece
        break;

    case c:
        //o que acontece
        break;

    default:
        //o que acontece
}

function verificacor(){
    let cor = document.getElementById('cor').value;
    cor = cor.toLowerCase(); 

    switch (cor){
        case "azul":
            document.body.style.backgroundColor = "blue"
            break;
        
        case "vermelho":
            document.body.style.backgroundColor = "red"
            break;
    
        case "amarelo":
            document.body.style.backgroundColor = "yellow"
            break;
    
        default:
            document.getElementById('texto').innerHTML = "Nenhuma cor disponível para: "+cor;
    }
}