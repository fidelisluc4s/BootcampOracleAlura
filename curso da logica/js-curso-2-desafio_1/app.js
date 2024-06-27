let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function brtConsole() {
    console.log("O botão foi clicado");
}

function brtAlerta() {
    alert("Eu amo JS");
}

function brtPrompt() {
    let cidade = prompt("Fale qualquer nome de cidade do Brasil.");
    console.log(`Estive em ${cidade} e lembrei de você.`);
}

function brtSoma() {
    let contador = 0
    let soma = 0;
    while (contador < 2) {
        contador++;
        let numero = parseInt(prompt("Digite qualquer número"));
        soma += numero;
    }
    console.log(soma);
}