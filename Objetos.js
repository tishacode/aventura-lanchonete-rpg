import { Objeto, Ferramenta } from './Basicas.js';

const chave = new Ferramenta('chave', 'Uma pequena chave enferrujada. Pode abrir algo.');
const bilhete = new Objeto('bilhete', 'Um bilhete com uma dica: "A resposta está onde tudo começa."');
const marmita = new Objeto('marmita', 'Uma marmita ainda quente. Alguém esteve aqui recentemente.');
const papel = new Objeto('papel', 'Um papel com números rabiscados: 4 2 6');
const espelho = new Objeto('espelho', 'Um espelho trincado, refletindo sua imagem com distorção.');
const planilha = new Objeto('planilha', 'Planilha de vendas do dia. Algum número parece estranho.');
const lanterna = new Ferramenta('lanterna', 'Uma lanterna sem pilhas. Pode ser útil se ligada.');

export {
  chave,
  bilhete,
  marmita,
  papel,
  espelho,
  planilha,
  lanterna,
};
