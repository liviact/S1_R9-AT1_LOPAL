const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");
let nomeArquivo = "Dados.txt";

let nomes = [];
let enderecos = [];
let distancias = [];
let valoresKm = [];

let nome = 0;
let endereco = 0;
let distancia = 0;
let entrega = 0;
let urgente = 0;
let valorFinal = 0;
let valorKm = 0;

let i = 0;
let parar = 0;
let conteudo = "NOME - ENDEREÇO - DISTÂNCIA - VALOR P/KM - TIPO DE ENTREGA - CUSTO TOTAL";
fs.writeFileSync(nomeArquivo, conteudo, "utf8");

do {
    
    //repetir até conseguir o valor da variável nome correto
    do {
        distancia = promptSync(`Insira a distância:`);
    
        //verificação da variável nome
        if (isNaN(distancia)) {
            console.log(`ERRO`);
    
        } else {
            distancias[i] = distancia;
            conteudo += +distancia[i]+" - ";
        }
        
    } while (isNaN(distancia));



    parar = promptSync(`Caso deseje continuar digite "sim" ou "s"!`);
    i++;

} while (parar == "sim" || parar == "s");

for (let  i= 0;  i< distancias.length; i++) {
    
//    console.log(`${distancias[i]}`);
    
}

do {
    
    //repetir até conseguir o valor da variável nome correto
    do {
        valor = promptSync(`Insira o valor da entrega:`);
    
        //verificação da variável nome
        if (isNaN(valor)) {
            console.log(`ERRO`);
    
        } else {
            valorKm[i] = valor;
            conteudo += +valor[i]+" - ";
        }
        
    } while (isNaN(valor));



    parar = promptSync(`Caso deseje continuar digite "sim" ou "s"!`);
    i++;

} while (parar == "sim" || parar == "s");

for (let  i= 0;  i< valores.length; i++) {
    
    console.log(`${valores[i]} ${distancias[i]}`);
    
}