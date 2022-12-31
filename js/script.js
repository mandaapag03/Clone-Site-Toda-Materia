function mostrarEsconderDiv(botao, textoResposta) {
    if (textoResposta.style.display === "none") {
        textoResposta.style.display = "block";
        botao.style.backgroundColor = "#A3C2DA";
        botao.style.color = '#000';
        botao.innerHTML = 'Esconder Resposta';
    } else {
        textoResposta.style.display = "none";
        botao.style.backgroundColor = "#005B9C";
        botao.style.color = '#FFF';
        botao.innerHTML = 'Ver Resposta';
    }
}

let botoesResposta = document.querySelectorAll(".btn-resposta");
let textosResposta = document.querySelectorAll('.text-resposta');

for (let i = 0; i < botoesResposta.length; i++) {
    botoesResposta[i].addEventListener("click", function () {
        mostrarEsconderDiv(this, textosResposta[i]);
    })
}