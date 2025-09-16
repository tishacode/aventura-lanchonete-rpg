import { Salas } from './Basicas.js';

const cozinha = new Sala('Cozinha', 'Você está na cozinha da lanchonete. Há cheiro de comida no ar.');
const estoque = new Sala('Estoque', 'Você entrou no estoque. Prateleiras com produtos cercam você.');
const salao = new Sala('Salão', 'Você está no salão da lanchonete, com mesas e cadeiras espalhadas.');
const banheiro = new Sala('Banheiro', 'Você está no banheiro. Um local pequeno, mas limpo.');
const escritorio = new Sala('Escritório', 'Você está no escritório. Há um cofre trancado em um canto.');

// Conexões entre as salas
cozinha.adicionaSaida('sul', salao);
salao.adicionaSaida('norte', cozinha);
salao.adicionaSaida('leste', estoque);
salao.adicionaSaida('oeste', banheiro);
banheiro.adicionaSaida('leste', salao);
estoque.adicionaSaida('oeste', salao);
salao.adicionaSaida('sul', escritorio);
escritorio.adicionaSaida('norte', salao);

export { cozinha };
