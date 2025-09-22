export class Player {
const novaSala = this.salaAtual.saidas[direcao];
if (novaSala) {
this.salaAtual = novaSala;
console.log(`Você foi para a sala: ${novaSala.nome}`);
novaSala.descrever();
} else {
console.log('Não é possível ir nessa direção.');
}
}


pegarItem(nomeItem) {
if (this.#mochila.length >= this.#limite) {
console.log('Sua mochila está cheia.');
return;
}
const item = this.salaAtual.removerItem(nomeItem);
if (item) {
this.#mochila.push(item);
console.log(`Você pegou: ${item.nome}`);
} else {
console.log('Item não encontrado.');
}
}


usarItem(nomeItem) {
const item = this.#mochila.find(i => i.nome === nomeItem);
if (item && typeof item.usar === 'function') {
item.usar();
} else {
console.log('Esse item não pode ser usado ou não está na mochila.');
}
}


verMochila() {
console.log('Mochila:');
this.#mochila.forEach(item => console.log(`- ${item.nome}`));
}


largarItem(nomeItem) {
const index = this.#mochila.findIndex(i => i.nome === nomeItem);
if (index !== -1) {
const [item] = this.#mochila.splice(index, 1);
this.salaAtual.adicionarItem(item);
console.log(`Você largou: ${item.nome}`);
} else {
console.log('Esse item não está na sua mochila.');
}
}
}