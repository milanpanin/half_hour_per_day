import { Posuda } from './Posuda';
import { Cediljka } from './Cediljka';

class Sokovnik {
  posuda: Posuda;
  cediljka: Cediljka;

  constructor(posuda: Posuda, cediljka: Cediljka) {
    this.posuda = posuda;
    this.cediljka = cediljka;
  }
}