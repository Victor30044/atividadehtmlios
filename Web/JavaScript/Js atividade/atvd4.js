let nome = prompt("Digite a palavra desejada")
let text = "eu amo programar em front-end!"
if(text.includes(nome)){
    alert(`A palavra ${nome} foi encontrada no texto.`);
}
else{
    alert(`A palavra ${nome} nao foi encontrada no texto.`);
}