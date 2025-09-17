class Item {
  constructor(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
  }

  usar(salaAtual, inventario) {
    return {
      mensagem: `Você usou o item ${this.nome}, mas nada aconteceu...`,
      fimDeJogo: false,
    };
  }
}

class Chave extends Item {
  usar(salaAtual, inventario) {
    if (salaAtual.nome === 'Cofre') {
      return {
        mensagem: '🔓 Você usou a chave para abrir o cofre... Dentro há um envelope com a solução do mistério! 🕵️‍♀️✨\n🎉 PARABÉNS! Você venceu o jogo!',
        fimDeJogo: true,
      };
    }
    return {
      mensagem: 'Você tentou usar a chave, mas não há nada para abrir aqui.',
      fimDeJogo: false,
    };
  }
}

class Bilhete extends Item {
  usar() {
    return {
      mensagem: '📝 O bilhete diz: "A resposta está onde a luz nunca apaga."',
      fimDeJogo: false,
    };
  }
}

class Lanterna extends Item {
  usar(salaAtual) {
    if (salaAtual.nome === 'Despensa Escura') {
      salaAtual.descricao += '\n💡 Com a lanterna acesa, você vê uma chave brilhando no canto!';
      salaAtual.itens.push(new Chave('chave', 'Uma pequena chave prateada.')); // garante que a chave esteja lá
      return {
        mensagem: 'Você acendeu a lanterna e revelou algo na sala...',
        fimDeJogo: false,
      };
    }
    return {
      mensagem: 'Você acendeu a lanterna, mas não há nada de novo para ver.',
      fimDeJogo: false,
    };
  }
}

export { Item, Chave, Bilhete, Lanterna };