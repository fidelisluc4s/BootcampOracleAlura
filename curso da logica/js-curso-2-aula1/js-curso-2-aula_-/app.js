let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tags, texto) {
    let campo = document.querySelector(tags);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 ao 100.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

const nome = "Lucas";
exibeNome(nome);
function exibeNome(nome) {
    console.log(`Olá,${nome}!`);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

/*const numero = prompt("Jogue um número para saber qual é o dobro.");
doubroDoNumero(numero);
function doubroDoNumero(numero) {   
    const double = numero * 2;
    return console.log(`O doubro do ${numero} é ${double}.`);
}*/


//Criar uma função que recebe três números como parâmetros e retorna a média deles.

const numero1 = 20;
const numero2 = 50;
const numero3 = 50;

function mediaDosNumeros(numero1, numero2, numero3) {   
    let media = (numero1 + numero2 + numero3) / 3;
    console.log(media);    
}
mediaDosNumeros(numero1, numero2, numero3);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
maiorEntreEles(numero2,numero3);
function maiorEntreEles(numero2, numero3) {
    if(numero2 > numero3){
        console.log(`O maior número é ${numero2}`);
    }else if(numero2 == numero3){
        console.log("Os números são iguais!");
    }else{
        console.log(`O número ${numero3} é o maior `);
    }
}

let quadrado = x => x * x;

console.log(quadrado(3));