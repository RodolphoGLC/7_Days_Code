/*
    Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que 
você vai adivinhar (7, por exemplo).
    Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, 
ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

---> Número aleatório: Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
*/

alert("Vamos adivinhar os números entre 0 e 10?");

let minimo = 1;
let maximo = 10;

let randomizar = Math.floor(Math.random() * (maximo - (minimo * 3 * Math.random())));

let contador = 0;

while(contador < 3){
    let chute = prompt('Digite um número para vermos se você acertou!');

    if (chute == randomizar){
        alert(`Parabéns o número digitado é igual ao randomizado ${chute} = ${randomizar}`);
        break;
        contador ++;
    }
    else if (chute > randomizar){
        alert(`O número digitado ${chute} é maior que que o randomizado`);
        contador ++;
    } 
    else if (chute < randomizar){
        alert(`O número digitado ${chute} é menor que que o randomizado`);
        contador ++;
    }
}

alert(`O número randomizado era ${randomizar}`);

