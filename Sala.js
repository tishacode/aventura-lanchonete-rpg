// Sala.js

export class Sala {
  constructor(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
    this.itens = [];
    this.conexoes = {};
  }

  conectar(direcao, sala) {
    this.conexoes[direcao] = sala;
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  removerItem(nomeItem) {
    const index = this.itens.findIndex(item => item.nome === nomeItem);
    if (index !== -1) {
      return this.itens.splice(index, 1)[0];
    }
    return null;
  }

  descrever() {
    let descricao = `${this.nome}\n${this.descricao}\n\nVocê vê aqui:`;
    if (this.itens.length === 0) {
      descricao += '\nNada de especial.';
    } else {
      this.itens.forEach(item => {
        descricao += `\n- ${item.nome}: ${item.descricao}`;
      });
    }
    descricao += '\n\nSaídas disponíveis:';
    for (const direcao in this.conexoes) {
      descricao += `\n- ${direcao}`;
    }
    return descricao;
  }
}