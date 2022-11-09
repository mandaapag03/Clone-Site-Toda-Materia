function mostrarEsconderDiv(botao, div_displayNone) { 
    if(div_displayNone.style.display === "none"){
       div_displayNone.style.display = "block";
       botao.style.backgroundColor = "#A3C2DA";
       botao.style.color = '#000';
       botao.innerHTML = 'Esconder Resposta';
    } else{
        div_displayNone.style.display = "none";
        botao.style.backgroundColor = "#005B9C";
        botao.style.color = '#FFF';
        botao.innerHTML = 'Ver Resposta';
    }
}

let botaoResposta = document.getElementsByClassName('.btn-resposta');
console.log(botaoResposta)

botaoResposta.addEventListener("click", function () {
    let textResposta = document.getElementsByClassName('.text-resposta');
    mostrarEsconderDiv(botaoResposta, textResposta);
})