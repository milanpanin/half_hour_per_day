import { Voce } from './Voce.js';

export class Jabuka extends Voce {
  crvljivo: boolean;

  constructor(tezina: number, crvljivo: boolean, zapremina: number) {
    super('Jabuka', tezina, zapremina);
    this.crvljivo = crvljivo;
  }
}