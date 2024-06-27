//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
/*let peso = prompt("Qual é seu peso? ");
let altura = prompt("Qual é sua altura? ");

calculoImc(peso, altura);
function calculoImc(peso, altura) {
    const resultado = peso / (altura * altura);
    console.log(resultado);
}*/

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
/*let numero = prompt("Passe um número inteiro");
calcularFatorial(numero);
let resultado = calcularFatorial(numero);
function calcularFatorial(numero) {
    if (numero === 0){
        return 1 ;
    }else{
        return numero * calcularFatorial(numero - 1);
    }    
}
console.log(`O número fatorial de ${numero} é ${resultado}`);
*/

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
/*let dolar = 4.80;
let dinheiro = prompt("Quantos reais vc tem? ");

let valor = resultado => dolar * resultado;
console.log(valor(dinheiro));*/

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
/*let base = prompt("Qual é a base");
let altura = prompt("Qual é a altura")

let perimetro = (altura, base) => base * altura;
console.log(perimetro(altura, base));*/

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
/*let raio = prompt("Qual é valor do raio? ")
let pi = 3.14;

comprimentoPerimetro(raio, pi);
function comprimentoPerimetro(raio, pi) {
    c = 2 * pi * raio;
    a = pi * raio * raio;
    console.log(`A área do circulo é ${c} e o perímetro é ${a}`);    
}*/

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let numero = prompt("Digite qualquer número. ");
tabuadaNumero(numero);
function tabuadaNumero(numero) {
    for (let i = 0; i <= 10; i++) {
        resultado = numero * i;
        console.log(resultado);        
    }
}