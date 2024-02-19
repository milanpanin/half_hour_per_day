import { Voce } from './Voce';

class Jabuka extends Voce {
  crvljivo: boolean;

  constructor(tezina: number, crvljivo: boolean) {
    super('Jabuka', tezina);
    this.crvljivo = crvljivo;
  }
}