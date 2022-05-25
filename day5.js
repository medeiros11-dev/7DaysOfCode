let quer = "sim";
var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var materialDeLimpeza = [];
var temperos = [];
var vegetais = [];
var categoria = "";
var categorias = [' frutas', ' laticínios', ' doces', ' congelados', ' material de limpeza', ' temperos', ' vegetais'];
var adicionarComida = [];
while (quer != "não"){
    let quer = prompt ("Você deseja adicionar um item a sua lista de compras ? Responda com 'sim' ou 'não'");
    while(quer != "sim" && quer!="não") {
        alert(`Resposta não reconhecida ! Por favor responda 'sim' ou 'não'`);
        quer = prompt ("Você deseja adicionar um item a sua lista de compras ? Responda com 'sim' ou 'não'");
    }
    if (quer === "não") {
        break;
    }
    adicionarComida =(prompt ("Qual item você deseja inserir ?"));
    categoria = (prompt (`Em qual categoria você deseja adicionar: ${adicionarComida} ?\n${categorias}`));
    if (categoria === 'frutas') {
        frutas.push(adicionarComida);
    }
    else if (categoria === 'laticínios') {
        laticinios.push(adicionarComida);
    }
    else if (categoria === 'doces') {
        doces.push(adicionarComida);
    }
    else if (categoria === 'congelados') {
        congelados.push(adicionarComida);
    }
    else if (categoria === 'material de limpeza') {
        materialDeLimpeza.push(adicionarComida);
    }
    else if (categoria === 'temperos') {
        temperos.push(adicionarComida);
    }
    else if (categoria === 'vegetais') {
        vegetais.push(adicionarComida);
    }
    else {
        alert("Essa categoria não foi definida");
    }
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n Material de Limpeza: ${materialDeLimpeza}\n Temperos: ${temperos}\n Vegetais: ${vegetais} `);
}
