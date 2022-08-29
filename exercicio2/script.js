//Escreva um programa que faça 3 perguntas de Sim ou Não, e guarde cada resposta em uma variável
let casa = prompt("você está na sua casa?")
let triste = prompt("você está triste hoje?")
let cachorro = prompt("você tem cachorro?")

//Crie três novas variáveis, contendo as respostas;
let respCasa = casa
let respTriste = triste
let respCachorro = cachorro

//Imprima na tela todas as respostas.
/*console.log(respCasa)
console.log(respTriste)
console.log(respCachorro)*/

//Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis.
const perguntaCasa = "você está na sua casa?"
const perguntaTriste = "você está triste hoje?"
const perguntaCachorro = "você tem cachorro?"

//Altere seu programa, para que a impressão das respostas também tenha as perguntas
console.log(perguntaCasa, respCasa)
console.log(perguntaTriste, respTriste)
console.log(perguntaCachorro, respCachorro)
