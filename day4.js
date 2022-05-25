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
