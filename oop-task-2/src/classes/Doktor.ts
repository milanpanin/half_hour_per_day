import { tipPregleda } from './enum.js';
import { Pacijent } from './Pacijent.js';

export class Doktor {
  ime: string;
  prezime: string;
  private specijalnost: string;

  constructor (ime: string, prezime: string, specijalnost: string) {
    this.ime = ime;
    this.prezime = prezime;
    this.specijalnost = specijalnost;
  }

  zakazivanjePregleda(pacijent: Pacijent, tip: tipPregleda) {
    pacijent.pregled[tip] = true;
    console.log(`Pregled je zakazan za pacijenta ${pacijent.ime} ${pacijent.prezime}`);
  }
}