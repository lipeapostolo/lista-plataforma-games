import { Competidor } from './competidor';
import { Luta } from './luta';

describe('Luta', () => {
   
    it('Deveria criar Luta', () => {
        //given
        const competidor1 = new Competidor("Luiz");
        const competidor2 = new Competidor("Lucas");

        //when
        let luta = new Luta(competidor1, competidor2);

        //then
        expect(luta.lutador1 === competidor1).toBeTrue();
        expect(luta.lutador2 === competidor2).toBeTrue();
    });

    it('Deveria marcar vitoria para competidor1', () => {
        //given  
        const competidor1 = new Competidor("Luiz");
        const competidor2 = new Competidor("Lucas");
        let luta = new Luta(competidor1, competidor2);

        //when
        luta.marcaGanhador(competidor1);

        expect(luta.ganhador === luta.lutador1).toBeTrue();
        expect(luta.lutador1.vitorias === 1).toBeTrue();
        expect(luta.lutador2.vitorias === 0).toBeTrue();
        expect(luta.lutador2.eliminado).toBeTrue();
    });

    it('Deveria marcar vitoria para competidor2', () => {
        //given  
        const competidor1 = new Competidor("Luiz");
        const competidor2 = new Competidor("Lucas");
        let luta = new Luta(competidor1, competidor2);

        //when
        luta.marcaGanhador(competidor2);

        expect(luta.ganhador === luta.lutador2).toBeTrue();
        expect(luta.lutador2.vitorias === 1).toBeTrue();
        console.log(luta);
        expect(luta.lutador1.vitorias === 0).toBeTrue();
        expect(luta.lutador1.eliminado).toBeTrue();
    });

  it('Deveria marcar empate', () => {
    //given  
    const competidor1 = new Competidor("Luiz");
    const competidor2 = new Competidor("Lucas");
    let luta = new Luta(competidor1, competidor2);

    //when
    luta.marcaEmpate();

    //then
    expect(luta.ganhador == null).toBeTrue();
    expect(luta.lutador2.empates === 1).toBeTrue();
    expect(luta.lutador1.empates === 1).toBeTrue();
    expect(luta.lutador2.vitorias === 0).toBeTrue();
    expect(luta.lutador1.vitorias === 0).toBeTrue();
    expect(!luta.lutador2.eliminado).toBeTrue();
    expect(!luta.lutador1.eliminado).toBeTrue();
  });
});