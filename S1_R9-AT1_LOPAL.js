const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");
let nomeArquivo = "Dados.txt";

let nomes = [];
let enderecos = [];
let distancias = [];

let nome = 0;
let endereco = 0;
let distancia = 0;
let entrega = 0;
let urgente = 0;
let valorFinal = 0;
const valor = 2;

let i = 0;
let parar = 0;
let conteudo = "NOME - ENDEREÇO - DISTÂNCIA - VALOR P/KM - TIPO DE ENTREGA - CUSTO TOTAL";
fs.writeFileSync(nomeArquivo, conteudo, "utf8");

do {
    
    //repetir até conseguir o valor da variável nome correto
    do {
        nome = promptSync(`Insira seu nome:`);
    
        //verificação da variável nome
        if (!(isNaN(nome))) {
            console.log(`ERRO`);
    
        } else {
            nomes[i] = nome;
            conteudo += "\n"+nomes[i]+" - ";
        }
        
    } while (nome = !(isNaN(nome)));



    parar = promptSync(`Caso deseje continuar digite "sim" ou "s"!`);
    i++;

} while (parar == "sim" || parar == "s");

for (let  i= 0;  i< nomes.length; i++) {
    
    console.log(`${nomes[i]}`);
    
}
