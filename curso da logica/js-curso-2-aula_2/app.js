let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
verificarChute(tentativas);

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Parabéns você acertou o ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('h2', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h2', 'O número é menor');
        } else if (chute < numeroSecreto) {
            exibirTextoNaTela('h2', 'O número é maior');
        }
        tentativas++;
        limpaCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

//função limpar chute
function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}










