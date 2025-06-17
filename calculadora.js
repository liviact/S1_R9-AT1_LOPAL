let nome = 0;
let nomes = [];
let endereco = 0; 
let enderecos = [];
let distancia = 0;
let distancias = [];
let comum = 0;
let urgente = 'não';
let valorFinal = 0;
let valor = 0;



entrega = valor*distancia;

   let tipoEntrega= promptSync('Entrega urgente? Confirme com "s": ');

    if (tipoEntrega == 's') {
        entrega = entrega*1.2;
        urgente = 'sim';
    } 



    
let conteudo = `Nome: ${nomes}, Endereço: ${enderecos}, Distância: ${distancias}, Urgência: ${urgente}, Valor: ${valorFinal}`;