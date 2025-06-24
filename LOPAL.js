const fs = require("fs");
const promptSync = require("prompt-sync")();
let nomeArquivo = "Dados.txt";

//criados os vetores para armazenar cada informação
let nomes = [];
let enderecos = [];
let distancias = [];
let valoresKm = [];

//criadas as variáveis auxiliares
let nome = 0;
let endereco = 0;
let distancia = 0;
let entrega = 0;
let urgente = 0;
let valorKm = 0;
let valorFinal = 0;

let i = 0;
let parar = "";
let urgencia = "";
let conteudo = "NOME - ENDEREÇO - DISTÂNCIA - VALOR - TIPO DE ENTREGA - CUSTO TOTAL\n";

fs.writeFileSync(nomeArquivo, conteudo, "utf8");

//solicita o nome, verificando se é válido e se não é um número
do {
    do {
        nome = promptSync(`Insira seu nome:`);
        if (!(isNaN(nome))) {
            console.log(`ERRO`);
        } else {
            nomes[i] = nome;
            conteudo += `${nomes[i]} - `;
        }
    } while (!(isNaN(nome)));


//solicita o endereço e verifica se não está vazio 
    do {
        endereco = promptSync(`Insira seu endereço:`);
        if (endereco == '') {
            console.log(`ERRO`);
        } else {
            enderecos[i] = endereco;
            conteudo += `${enderecos[i]} - `;
        }
    } while (endereco == '');

//solicita a distância de entrega, verificando se o número é válido
    do {
        distancia = parseFloat(promptSync(`Insira a distância:`));
        if (!isNaN(distancia)) {
            distancias[i] = distancia;
            conteudo += `${distancia} - `;
        } else {
            console.log(`ERRO`);
        }
    } while (isNaN(distancia));

//solicita o valor por quilômetro e garante que seja um número válido
    do {
        valorKm = parseFloat(promptSync(`Insira o valor da entrega:`));
        if (!isNaN(valorKm)) {
            valoresKm[i] = valorKm;
            conteudo += `${valorKm} - `;
        } else {
            console.log(`ERRO`);
        }
    } while (isNaN(valorKm));

//cálculo do valor inicial da entrega
    valorFinal = distancia * valorKm;

//pergunta se a entrega é urgente, caso seja, adiciona 20% ancima do valor inicial
    urgencia = promptSync(`Deseja adicionar a entrega como urgente? digite "sim" ou "s"!`);
    if (urgencia === "sim" || urgencia === "s") {
        valorFinal += valorFinal * 0.2;
        conteudo += `URGENTE E VALOR TOTAL: ${valorFinal}\n`;
    } else {
        conteudo += `VALOR TOTAL: ${valorFinal}\n`;
    }

//confere se o cliente deseja continuar ou parar 
    parar = promptSync(`Caso deseje continuar digite "sim" ou "s"!`);
    i++;
} while (parar === "sim" || parar === "s");

//caso o cliente deseje parar, ele encerra e mostra os dados
fs.writeFileSync(nomeArquivo, conteudo, "utf8");
console.log(`Dados salvos com sucesso. \n ${conteudo}`);