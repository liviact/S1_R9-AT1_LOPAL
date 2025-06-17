const fs = require("fs");
const promptSync = require("prompt-sync")();
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
    
    //repetir até conseguir o valor da variável NOME correto
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

     //repetir até conseguir o valor da variável ENDEREÇO correto
     do {
        endereco = promptSync(`Insira seu endereço:`);
    
        //verificação da variável endereço
        if (endereco == '') {
            console.log(`ERRO`);
    
        } else {
            enderecos[i] = endereco;
            conteudo += enderecos[i]+" - ";
        }
        
    } while (endereco == '');

    //repetir até conseguir o valor da variável DISTÂNCIA correto
    do {
        distancia = promptSync(`Insira a distância:`);
    
        //verificação da variável distâncias
        if (isNaN(distancia)) {
            console.log(`ERRO`);
    
        } else {
            distancias[i] = distancia;
            conteudo += +distancia[i]+" - ";
        }
        
    } while (isNaN(distancia));
    
    //repetir até conseguir o valor da variável VALOR POR KM correto
    do {
        valorKm = promptSync(`Insira o valor da entrega em reais:`);
        
        //verificação da variável nome
        if (isNaN(valorKm)) {
            console.log(`ERRO`);
        
        } else {
            valoresKm[i] = valorKm;
            conteudo += valorKm[i]+" - ";
        }
            
    } while (isNaN(valorKm));

    parar = promptSync(`Caso deseje continuar digite "sim" ou "s"!`);
    i++;
    
} while (parar == "sim" || parar == "s");

for (let  i= 0;  i< nomes.length; i++) {
    
    console.log(`${nomes[i]} - ${enderecos[i]} - ${distancias[i]} - R$${valoresKm[i]}`);
    
}

