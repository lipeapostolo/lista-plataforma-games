import { Game } from "./game";

export class Plataforma {
  key: any
  id: string = "";
  nome: string = "";
  listaGame: Game[] = [];
  alterado: boolean = false; 
}