import { Posuda } from './Posuda.js';
import { Cediljka } from './Cediljka.js';

class Sokovnik {
  posuda: Posuda;
  cediljka: Cediljka;

  constructor(posuda: Posuda, cediljka: Cediljka) {
    this.posuda = posuda;
    this.cediljka = cediljka;
  }
}