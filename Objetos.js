import { Objeto, Ferramenta } from './Basicas.js';

// Ferramentas funcionais (podem interagir com o ambiente)
const chaveDeposito = new Ferramenta('chave', 'Uma pequena chave enferrujada. Pode abrir algo.');
const lanterna = new Ferramenta('lanterna', 'Uma lanterna sem pilhas. Pode ser útil se ligada.');

// Itens narrativos / pistas
const bilhete = new Objeto('bilhete', 'Um bilhete com uma dica: "A resposta está onde tudo começa."');
const marmita = new Objeto('marmita', 'Uma marmita ainda quente. Alguém esteve aqui recentemente.');
const papel = new Objeto('papel', 'Um papel com números rabiscados: 4 2 6');
const espelho = new Objeto('espelho', 'Um espelho trincado, refletindo sua imagem com distorção.');
const planilha = new Objeto('planilha', 'Planilha de vendas do dia. Algum número parece estranho.');


export {
  chaveDeposito,
  lanterna,
  bilhete,
  marmita,
  papel,
  espelho,
  planilha,
};
