import { Torneio } from './torneio';
import { Competidor } from './competidor';
import { Luta } from './luta';

describe('Torneio', () => {

  const torneio = new Torneio();
  const competidor1 = new  Competidor("Teste1");
  const competidor2 = new Competidor("Teste2");
  const competidor3 = new Competidor("Teste3");
  const competidor4 = new Competidor("Teste3");

  let lutaAtual: Luta;

  it('should create an instance', () => {
    expect(new Torneio()).toBeTruthy();
  });

  it('Adiciona Competidores',() => {

    //when
    torneio.adiconaCompetidores([
      competidor1,
      competidor2,
      competidor3,
      competidor4,
    ]);

    expect(4).toBe(torneio.competidores.length);
  });
  
  it('Gerar Proxima Luta',() => {
    //when
    lutaAtual = torneio.geraProximaLuta();

    console.log(lutaAtual);

    expect(lutaAtual.lutador1.emLuta).toBe(true);
    expect(lutaAtual.lutador2.emLuta).toBe(true);
    expect(lutaAtual.lutador1.nome != lutaAtual.lutador2.nome).toBe(true);
    expect(1).toBe(torneio.lutas.length);
  });

  it('Gerar Proxima Luta dos competidores que não lutarão',() => {
    //when
    let luta = torneio.geraProximaLuta();

    console.log(luta);

    expect(luta.lutador1.emLuta).toBe(true);
    expect(luta.lutador2.emLuta).toBe(true);
    expect(luta.lutador1.nome != luta.lutador2.nome).toBe(true);
    expect(1).toBe(torneio.lutas.length);
  });

  it('Gerar o ganhador',() => {
    torneio.adiconaCompetidores([
      new Competidor("Teste1"),
      new Competidor("Teste2")
    ]);

    let luta = torneio.geraProximaLuta();

    luta.lutador1.marcaVitoria();
    luta.lutador2.marcaDerrota();

    expect(torneio.ganhador).toBe(luta.lutador1);
  });

  it('Gera Luta Com Competidores Impa', () => {
    let competidor3 = new Competidor("Teste3");

    torneio.adiconaCompetidores([
      new Competidor("Teste1"),
      new Competidor("Teste2"),
      competidor3
    ]);

    let primeiraLuta = torneio.geraProximaLuta();

    primeiraLuta.lutador1.marcaVitoria();
    primeiraLuta.lutador2.marcaDerrota();

    let segundaLuta = torneio.geraProximaLuta();

    expect(segundaLuta.lutador1 == primeiraLuta.lutador2 || segundaLuta.lutador1 == competidor3).toBe(true);
  });
});
