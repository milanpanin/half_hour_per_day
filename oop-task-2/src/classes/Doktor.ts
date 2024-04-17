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
    if (pacijent.doktor === this) {
      pacijent.pregled[tip] = true;
      console.log(`Doktor ${this.ime} ${this.prezime} je zakazao pregled za ${tip} pacijenta ${pacijent.ime} ${pacijent.prezime}.`);
    } else {
      console.log(`Doktor ${this.ime} ${this.prezime} nije izabrani doktor pacijenta ${pacijent.ime} ${pacijent.prezime} i ne može zakazati pregled.`);
    }
  }
}