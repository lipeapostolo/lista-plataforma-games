import { Competidor } from './competidor';

describe('Competidor', () => {
  it('Deveria criar Competidor', () => {
    let nomeCompetidor = "Jhon";
    let competidor = new Competidor(nomeCompetidor);
    expect(competidor.nome ===  nomeCompetidor).toBeTruthy();
  });

  it('Deveria marcar vitoria', () => {
    let competidor = new Competidor("Jhon");

    competidor.marcaVitoria();
    expect(competidor.vitorias > 0).toBeTruthy();
    expect(competidor.jaLutou).toBeTruthy();
  });

  it('Deveria marcar derrota', () => {
    let competidor = new Competidor("Jhon");

    competidor.marcaDerrota();
    expect(competidor.eliminado).toBeTruthy();
    expect(competidor.jaLutou).toBeTruthy();
  });

  it('Deveria marcar empate', () => {
    let competidor = new Competidor("Jhon");

    competidor.marcaEmpate();
    expect(competidor.empates > 0).toBeTruthy();
    expect(competidor.jaLutou).toBeTruthy();
  });

  it('Deveria selecionar para luta', () => {
    let competidor = new Competidor("Jhon");

    competidor.selecionadoParaLuta();
    expect(competidor.emLuta).toBeTruthy();
    expect(competidor.jaLutou).toBeFalse();
  });

  it('Deveria passar para proxima luta', () => {
    let competidor = new Competidor("Jhon");

    competidor.passouParaProximaFase();

    expect(competidor.emLuta).toBeFalse();
    expect(competidor.jaLutou).toBeFalse();
  });
});