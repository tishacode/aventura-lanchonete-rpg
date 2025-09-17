export function verificarVitoria(player) {
if (player.salaAtual.nome === 'Escritório') {
const temChave = player.#mochila?.some(i => i.nome === 'Chave do Cofre');
if (temChave) {
console.log('Parabéns! Você encontrou a chave do cofre e venceu o jogo!');
process.exit(0);
}
}
}