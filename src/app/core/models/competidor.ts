export class Competidor {
    id: string = "";
    nome: string;
    private _vitorias: number = 0;
    private _empates: number = 0;
    private _eleminado: boolean = false;
    private _jaLutou: boolean = false;
    private _emLuta: boolean = false;


    constructor(nome: string) {
        this.nome = nome;
    }

    get vitorias(): number {
        return this._vitorias;
    }

    get empates(): number {
        return this._empates;
    }

    get jaLutou(): boolean {
        return this._jaLutou;
    }

    get eliminado(): boolean {
        return this._eleminado;
    }

    get emLuta(): boolean {
        return this._emLuta;
    }

    marcaVitoria(): void {
        this._vitorias += 1;
        this._jaLutou = true;
    }

    marcaDerrota(): void {
        this._eleminado = true;
        this._jaLutou = true;
    }

    marcaEmpate(): void {
        this._empates += 1;
        this._jaLutou = true;
    }

    selecionadoParaLuta(): void {
        this._emLuta = true;
    }

    passouParaProximaFase(): void {
        this._jaLutou = false;
    }
}