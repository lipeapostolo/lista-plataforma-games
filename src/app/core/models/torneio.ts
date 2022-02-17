import { Competidor } from "./competidor";
import { Luta } from "./luta";

export class Torneio {

    id: string = "";
    competidores: Competidor[] = [];
    lutas: Luta[] = [];

    get ganhador(): Competidor {
        let competidores = this.competidores.filter(x => !x.eliminado);

        if(competidores.length > 1) return competidores[0];

        return competidores[0];
    }

    adiconaCompetidores(competidoresNovos: Competidor[]) {
        this.competidores = competidoresNovos;
    }

    geraProximaLuta(): Luta {
        let competidores = this.competidores.filter(x => !x.jaLutou && !x.eliminado);

        let luta = new Luta(competidores[0], competidores[1]);

        luta.lutador1 = competidores[Math.floor(Math.random() * competidores.length)];
        luta.lutador2 = competidores[Math.floor(Math.random() * competidores.length)];

        while(luta.lutador1 === luta.lutador2){
            luta.lutador2 = competidores[Math.floor(Math.random() * competidores.length)]
        }

        luta.lutador1.selecionadoParaLuta();
        luta.lutador2.selecionadoParaLuta();

        this.lutas.push(luta);
        return luta;
    }
}
