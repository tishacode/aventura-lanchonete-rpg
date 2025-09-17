import { Item, Chave, Bilhete, Lanterna } from './Item.js';

class Sala {
  constructor(nome, descricao, conexoes = {}, itens = []) {
    this.nome = nome;
    this.descricao = descricao;
    this.conexoes = conexoes; // { norte: 'Cozinha', sul: 'Sala Secreta' }
    this.itens = itens; // lista de instâncias de Item
  }

  descrever() {
    const descricaoItens = this.itens.length > 0
      ? `Você vê: ${this.itens.map(item => item.nome).join(', ')}.`
      : 'Não há nada de especial aqui.';
    return `${this.nome}\n${this.descricao}\n${descricaoItens}`;
  }
}

function criarSalas() {
  const lanchonete = new Sala(
    'Lanchonete',
    'Você está na lanchonete central. Mesas bagunçadas e um silêncio estranho no ar.',
    { norte: 'Cozinha', leste: 'Banheiro', sul: 'Despensa Escura' },
    [new Bilhete('bilhete', 'Um bilhete amassado.')]
  );

  const cozinha = new Sala(
    'Cozinha',
    'Utensílios espalhados e uma panela no fogão ainda quente.',
    { sul: 'Lanchonete', leste: 'Cofre' },
    [new Lanterna('lanterna', 'Uma lanterna sem pilhas.')]
  );

  const banheiro = new Sala(
    'Banheiro',
    'Espelhos embaçados e um leve som de gotejamento.',
    { oeste: 'Lanchonete' },
    []
  );

  const despensa = new Sala(
    'Despensa Escura',
    'Quase não se vê nada aqui dentro.',
    { norte: 'Lanchonete' },
    [] // Chave será revelada ao usar lanterna
  );

  const cofre = new Sala(
    'Cofre',
    'Você está diante de um cofre misterioso. Algo importante deve estar dentro.',
    { oeste: 'Cozinha' },
    []
  );

  return {
    'Lanchonete': lanchonete,
    'Cozinha': cozinha,
    'Banheiro': banheiro,
    'Despensa Escura': despensa,
    'Cofre': cofre,
  };
}

export { Sala, criarSalas };
