const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem ?");
const linguagem = prompt ("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);
const p1 = prompt (`Você gosta de estudar ${linguagem} ? Responda com número 1 para SIM ou 2 para NÃO`);
const msg2 = ("Muito bom! Continue estudando e você terá muito sucesso.");
const msg3 = ("Ahh que pena... Já tentou aprender outras linguagens?");
const msg4 = ("Não é uma resposta válida");
if (p1 == 1) {
    alert(msg2)
}
if (p1 == 2) {
    alert(msg3)
}
else {
    alert(msg4)
}
