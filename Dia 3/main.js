/*
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End. !

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, 
poderá aprender C# ou aprender Java. !

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na 
área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica 
para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, 
a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: 
"Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela 
complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem 
inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir 
aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na 
lista de aprendizado.
*/

let area = prompt("Em qual área você gostaria de seguir dentro da tecnologia (Front-End, Back-End)?");
let linguagem = '';
let full = '';
let tec = 'teste';

if (area === 'Front-End'){
    frontEnd();
    fullstack();
    tecnologias();
    alert("Muito obrigado pelas suas respostas, espero que tenha gostado!");
}
else if (area === 'Back-End'){
    backEnd();
    fullstack();
    tecnologias();
    alert("Muito obrigado pelas suas respostas, espero que tenha gostado!");
}
else{
    alert('A área escolhida não consta nos bancos de dados, se quiser se aprofundar nela, recomendo a Alura!');
}

function frontEnd(){
    linguagem = prompt('Como você descidiu Front-End, qual das linguagens mais te interessa? (React ou Vue)');
    if (linguagem === 'React'){
        alura();
    }
    else if (linguagem === 'Vue'){
        alura();
    }
    else{
        alert('A linguagem escolhida não consta nos bancos de dados, se quiser se aprofundar nela, recomendo a Alura!');
    }
}

function backEnd(){
    linguagem = prompt('Como você descidiu Back-End, qual das linguagens mais te interessa? (C# ou Java)');
    if (linguagem === 'C#'){
        alura();
    }
    else if (linguagem === 'Java'){
        alura();
    }
    else{
        alert('A linguagem escolhida não consta nos bancos de dados, se quiser se aprofundar nela, recomendo a Alura!');
    }
}

function fullstack(){
    full = prompt('Mais uma pergunta, você gostaria de se tornar um Full-Stack (quem sabe tanto Front quanto Back-End)? (S ou N)');
    if (full === 'S'){
        alert('Que bacana, espero que você consiga se desenvolver muito durante o seu aprendizado!!');
    }
    else{
        alert('Que pena, mas espero que você consiga se desenvolver muito durante o seu aprendizado na área em que escolher!!');
    }
}

function alura(){
    alert("Que legal, recomendo os cursos da Alura para caso queira se aprofundar no assunto!!");
}

function tecnologias(){
    while (tec != ''){
        let vazio = prompt('Quais tecnologias você gostaria de estudar?');

        if (vazio === ''){
            break;
        }
    }
}
























