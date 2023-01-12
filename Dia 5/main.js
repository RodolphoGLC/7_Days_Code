/* 
Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará 
se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, 
como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar 
tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, 
ele irá exibir uma lista com todos os itens agrupados
*/

let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];

let validacao = prompt('Você gostaria de adicionar um item a sua lista de compras? (Sim ou Não)')

if (validacao === 'Sim'){
    let escolha = prompt('Qual a categoria do item a ser adiionado? (Frutas, Laticínios, Congelados ou Doces)');
    let item = prompt(`Digite o item a ser adicionado nessa categoria: ${escolha}`);

    if (escolha === 'Frutas'){
        listaFrutas.push()
    }
    else if (escolha === 'Laticínios'){
        listaLaticinios.push()
    }
    else if (escolha === 'Congelados'){
        listaCongelados.push()
    }
    else if (escolha === 'Doces'){
        listaDoces.push()
    }

    validacao = prompt('Ainda tem mais algum item? (Sim ou Não)')
}
else {
    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}



