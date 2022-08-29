//Declare uma variável para armazenar um nome/idade, sem atribuir um valor.

let nome
let idade

//Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof nome, typeof idade)

//Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//Porque nao atribui um valor para ela

//Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
nome = prompt("qual seu nome?")
idade = prompt("qual sua idade?")

//Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome, typeof idade)
//apesar de ser um numero, saiu como string

//Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("Olá", nome,",", "você tem", idade, "anos.")
