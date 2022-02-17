import { Competidor } from './competidor';

export  class Luta {
    lutador1: Competidor;
    lutador2: Competidor;
    ganhador: Competidor | null = null;

    constructor(competidor1: Competidor, competidor2: Competidor) {
        this.lutador1 = competidor1;            
        this.lutador2 = competidor2;
    }

    marcaGanhador(competidor: Competidor): void {
        if(this.lutador1.nome === competidor.nome){
            this.ganhador = this.lutador1;
            this.lutador1.marcaVitoria();
            this.lutador2.marcaDerrota();
        } else {
            this.ganhador = this.lutador2;
            this.lutador2.marcaVitoria();
            this.lutador1.marcaDerrota();
        }
    }

    marcaEmpate(): void {
        this.lutador1.marcaEmpate();
        this.lutador2.marcaEmpate();
    }
 
}