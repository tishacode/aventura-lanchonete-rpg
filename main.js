import { criarJogo } from './Game.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const jogo = criarJogo();

console.clear();
console.log('Bem-vindo ao jogo: O Mistério do Cofre da Lanchonete!');
console.log('Digite "ajuda" para ver os comandos disponíveis.');
console.log(jogo.descreverSalaAtual());

while (!jogo.fimDeJogo) {
  const comando = prompt('\n> ').trim().toLowerCase();

  switch (comando) {
    case 'ajuda':
      console.log('\nComandos disponíveis:');
      console.log('- ir [direção]');
      console.log('- olhar');
      console.log('- pegar [item]');
      console.log('- usar [item]');
      console.log('- inventario');
      console.log('- sair');
      break;

    case 'olhar':
      console.log(jogo.descreverSalaAtual());
      break;

    case 'inventario':
      console.log(jogo.inventario.length === 0 ? 'Seu inventário está vazio.' : 'Você possui:');
      jogo.inventario.forEach(item => console.log(`- ${item.nome}: ${item.descricao}`));
      break;

    case 'sair':
      console.log('Encerrando o jogo. Até logo!');
      jogo.fimDeJogo = true;
      break;

    default:
      if (comando.startsWith('ir ')) {
        const direcao = comando.split(' ')[1];
        console.log(jogo.mover(direcao));
      } else if (comando.startsWith('pegar ')) {
        const item = comando.split(' ').slice(1).join(' ');
        console.log(jogo.pegar(item));
      } else if (comando.startsWith('usar ')) {
        const item = comando.split(' ').slice(1).join(' ');
        console.log(jogo.usar(item));
      } else {
        console.log('Comando não reconhecido. Digite "ajuda" para ver os comandos.');
      }
  }
}