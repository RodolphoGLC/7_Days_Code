// Leitura e saida de dados
// Desafio e o console fazer as perguntas e armazena-las em variaveis para depois responder em uma frase
//  Qual o seu nome?
//  Quantos anos você tem?
//  Qual linguagem de programação você está estudando?
//  Você gosta de estudar [linguagem]?  
//      Responder 1 ou 2 e ter saidas baseadas nelas;

// Básico sem HTML
var nome = prompt('Qual o seu nome?');
var idade = prompt('Qual a sua idade?');
var linguagemProgramacao = prompt('Qual a linguagem de programação que você está estudado?');
var gostaSN = prompt('Você está gostando dessa linguagem (S ou N)?');

if (gostaSN === 'S'){
    alert(`Olá ${nome}, você tem ${idade} anos e está aprendendo ${linguagemProgramacao}!`)
    alert(`E ainda por cima está gostando dela!!! Que legal.`)
}
else{
    alert(`Olá ${nome}, você tem ${idade} anos e está aprendendo ${linguagemProgramacao}!`)
    alert(`Que pena, teria alguma outra que deseje iniciar os seus estudos?`)
}

