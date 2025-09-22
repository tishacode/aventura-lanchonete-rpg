import { criarSalas } from './Salas.js';
import { Item, Chave, Bilhete, Lanterna } from './Item.js';

class Jogo {
  constructor() {
    this.salas = criarSalas();
    this.salaAtual = this.salas['Lanchonete'];
    this.inventario = [];
    this.fimDeJogo = false;
  }

  descreverSalaAtual() {
    return this.salaAtual.descrever();
  }

  mover(direcao) {
    const destino = this.salaAtual.conexoes[direcao];
    if (destino && this.salas[destino]) {
      this.salaAtual = this.salas[destino];
      return this.salaAtual.descrever();
    } else {
      return "Você não pode ir nessa direção.";
    }
  }

  pegar(nomeItem) {
    const index = this.salaAtual.itens.findIndex(item => item.nome === nomeItem);
    if (index !== -1) {
      const item = this.salaAtual.itens.splice(index, 1)[0];
      this.inventario.push(item);
      return `Você pegou: ${item.nome}`;
    } else {
      return "Esse item não está aqui.";
    }
  }

  usar(nomeItem) {
    const item = this.inventario.find(item => item.nome === nomeItem);
    if (!item) return "Você não possui esse item.";

    // Usa o método próprio do item
    const resultado = item.usar(this.salaAtual, this.inventario);

    // Atualiza estado do jogo se necessário
    if (item instanceof Lanterna && this.salaAtual.nome === 'Despensa Escura') {
      // Evita múltiplas inserções da mesma chave
      if (!this.salaAtual.itens.some(i => i instanceof Chave)) {
        this.salaAtual.itens.push(new Chave('chave', 'Uma pequena chave prateada.'));
      }
    }

    if (resultado.fimDeJogo) {
      this.fimDeJogo = true;
    }

    return resultado.mensagem;
  }
}

function criarJogo() {
  return new Jogo();
}

export { criarJogo };