import { Voce } from './Voce';
export class Jabuka extends Voce {
    constructor(tezina, crvljivo, zapremina) {
        super('Jabuka', tezina, zapremina);
        this.crvljivo = crvljivo;
    }
}
