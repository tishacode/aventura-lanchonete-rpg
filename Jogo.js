import { Salas } from "./Basicas.js";
import { sala1, sala2, sala3, sala4 } from "./SalasDemo.js";

export class JogoDemo {
  constructor() {
    this.salas = [sala1, sala2, sala3, sala4];
    this.salaAtual = sala1;
  }

  iniciar() {
    console.log("\n\n=== BEM-VINDO AO MISTÉRIO DO COFRE DA LANCHONETE ===\n");
    console.log("Digite 'ajuda' para ver os comandos disponíveis.\n");
    this.salaAtual.entrar();

    this.ouvirComandos();
  }

  ouvirComandos() {
    import("prompt-sync").then(({ default: prompt }) => {
      const input = prompt();
      while (true) {
        const comando = input("\n> ").trim().toLowerCase();
        if (comando === "sair") break;

        switch (comando) {
          case "ajuda":
            this.exibirAjuda();
            break;
          case "olhar":
            this.salaAtual.descrever();
            break;
          case "ir norte":
            this.moverPara("norte");
            break;
          case "ir sul":
            this.moverPara("sul");
            break;
          case "ir leste":
            this.moverPara("leste");
            break;
          case "ir oeste":
            this.moverPara("oeste");
            break;
          default:
            console.log("Comando desconhecido. Digite 'ajuda' para ver as opções.");
        }
      }
    });
  }

  moverPara(direcao) {
    const proximaSala = this.salaAtual.saidas[direcao];
    if (proximaSala) {
      this.salaAtual = proximaSala;
      this.salaAtual.entrar();
    } else {
      console.log("Você não pode ir nessa direção.");
    }
  }

  exibirAjuda() {
    console.log("\nComandos disponíveis:");
    console.log(" - olhar           => descrição da sala atual");
    console.log(" - ir norte/sul/leste/oeste => mover entre salas");
    console.log(" - sair            => encerrar o jogo");
  }
}
