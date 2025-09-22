import promptSync from 'prompt-sync';
const prompt = promptSync();

import { criarSalas } from './Salas.js';
import { Item, Chave, Bilhete, Lanterna } from './Item.js';

class Jogo {
  constructor() {
    this.salas = criarSalas();
    this.salaAtual = this.salas['Lanchonete'];
    this.inventario = [];
    this.lanternaLigada = false;
  }

  iniciar() {
    console.log("Bem-vindo ao Mistério do Cofre da Lanchonete!");
    while (true) {
      console.log("\n" + this.salaAtual.descrever());
      const comando = prompt('> ').trim().toLowerCase();
      if (comando === 'sair') break;
      this.executarComando(comando);
    }
    console.log("Jogo encerrado.");
  }

  executarComando(comando) {
    const [acao, ...args] = comando.split(' ');
    const argumento = args.join(' ');

    switch (acao) {
      case 'ir':
        this.mover(argumento);
        break;
      case 'pegar':
        this.pegarItem(argumento);
        break;
      case 'usar':
        this.usarItem(argumento);
        break;
      case 'inventario':
        this.listarInventario();
        break;
      default:
        console.log("Comando não reconhecido. Tente: ir, pegar, usar, inventario, sair");
    }
  }

  mover(direcao) {
    const destino = this.salaAtual.conexoes[direcao];
    if (destino && this.salas[destino]) {
      this.salaAtual = this.salas[destino];
      if (this.salaAtual.nome === 'Despensa Escura' && this.lanternaLigada) {
        const chave = new Chave('chave', 'Uma chave enferrujada encontrada no chão.');
        this.salaAtual.itens.push(chave);
      }
    } else {
      console.log("Você não pode ir nessa direção.");
    }
  }

  pegarItem(nomeItem) {
    const index = this.salaAtual.itens.findIndex(item => item.nome === nomeItem);
    if (index !== -1) {
      const item = this.salaAtual.itens.splice(index, 1)[0];
      this.inventario.push(item);
      console.log(`Você pegou: ${item.nome}`);
    } else {
      console.log("Esse item não está aqui.");
    }
  }

  usarItem(nomeItem) {
    const item = this.inventario.find(item => item.nome === nomeItem);
    if (!item) return console.log("Você não possui esse item.");

    if (item instanceof Lanterna) {
      this.lanternaLigada = true;
      console.log("Você acendeu a lanterna.");
    } else if (item instanceof Chave && this.salaAtual.nome === 'Cofre') {
      console.log("Você destrancou o cofre! Dentro há uma pista importante para o mistério!");
      console.log("Parabéns! Você venceu o jogo!");
      process.exit();
    } else if (item instanceof Bilhete) {
      console.log("O bilhete diz: 'A chave está onde a luz não chega.'");
    } else {
      console.log("Nada acontece.");
    }
  }

  listarInventario() {
    if (this.inventario.length === 0) {
      console.log("Seu inventário está vazio.");
    } else {
      console.log("Inventário:");
      this.inventario.forEach(item => console.log(`- ${item.nome}`));
    }
  }
}

function criarJogo() {
  const jogo = new Jogo();
  jogo.iniciar();
}

export { criarJogo };