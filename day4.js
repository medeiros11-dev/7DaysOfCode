/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.*/

const valorInicial = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let acertou = false;
for (let i=0; i<3; i++){
    let valor1= prompt("Adivinhe qual número estou pensando de 0 a 10");
    if (valorInicial == valor1) {
        alert("Muito bem, você acertou !")
        acertou = true;
        break;
    }
    alert("Errado !")
}
    if(!acertou){
        alert(`Infelizmente, você não acertou. O número era ${valorInicial}!`);
    }