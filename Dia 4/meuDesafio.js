let minimo = prompt('Digite um número para ser o valor mínimo');
let maximo = prompt('Digite um número para ser o valor máximo');

let randomizar = Math.floor(Math.random() * (maximo - (minimo * 3 * Math.random())));

let contador = 0;
let limite = Math.floor(maximo - (maximo/2) - (maximo/4) - (maximo/8));

while(contador < limite){
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
    else if (contador == limite){
        alert(`O número randomizado era ${randomizar}`);
    }
}

