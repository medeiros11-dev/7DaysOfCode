const area = prompt ("Qual área você deseja seguir Front-End ou Back-End ?");
if (area === "Front-End") {
    let msgf = prompt ("Você quer aprender React ou Vue ?");
}
else if (area === "Back-End") {
    let msgb = prompt ("Você quer aprender C# ou Java ?");
}
let esp = prompt ("Você deseja seguir se especializando na área ou seguir se desenvolvendo para se tornar Fullstack ? Digite 1 para continuar se especializando e 2 para se tornar full stack.");
const msgd= ("Muito bem, continue se especializando !");
const msgfull= ("Será um caminho árduo, mas você consegue !");
if (esp == 1) {
    alert(msgd);
}
else if (esp == 2) {
    alert(msgfull);
}
else {
    alert("Você não inseriu um valor válido!");
}
let repet = prompt("Existe mais alguma tecnologia que você tenha interesse ? Responda 'ok' se sim");
while (repet === "ok") {
    let tec = prompt ("Quais as tecnologias que você gostaria de conhecer ou se especializar ?");
    alert(`${tec} é realmente muito interessante !`);
    repet = prompt("Digite 'ok' para continuar adicionando tecnologias !");
}
