// Importa a engine principal do jogo (regras, loop, comandos, etc.)
import {Engine} from "./Basicas.js"

// Importa as salas que fazem parte do cenário
import { Cozinha, HallEntrada, Quarto, SalaDeEstar } from "./SalasDemo.js";

/**
 * Classe principal que representa o jogo "O Mistério do Cofre da Lanchonete"
 * Herda da classe Engine (motor do jogo)
 */
export class JogoDemo extends Engine{
    constructor(){
    // Chama o construtor da Engine
        super();
    }

   /**
   * Cria e configura todas as salas do jogo e suas ligações (portas).
   * Define também a sala inicial onde o jogador começa.
   */
    criaCenario(){
        // Define as salas que compõem o mapa (objetos que representam os ambientes)
        let hall = new HallEntrada(this);
        let sala = new SalaDeEstar(this);
        let quarto = new Quarto(this);
        let cozinha = new Cozinha(this);

        // Encadeia as salas através das portas
        // Hall <-> Sala de Estar
        hall.portas.set(sala.nome, sala);
        sala.portas.set(hall.nome, hall);

        // Sala de Estar <-> Quarto e Cozinha
        sala.portas.set(quarto.nome, quarto);
        sala.portas.set(cozinha.nome, cozinha);

        // Quarto <-> Sala de Estar
        quarto.portas.set(sala.nome, sala);

        // Cozinha <-> Sala de Estar
        cozinha.portas.set(sala.nome, sala);

        // Define onde o jogador começa o jogo
        this.salaCorrente = hall;
    }
}