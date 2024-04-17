import { Doktor } from "./Doktor";
import { tipPregleda } from "./enum";

export class Pacijent {
  ime: string;
  prezime: string;
  jmbg: string;
  brojKartona: string;
  doktor: Doktor | null;
  pregled: Record<tipPregleda, boolean>; 

  constructor(ime: string, prezime: string, jmbg: string, brojKartona: string) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojKartona = brojKartona;
    this.doktor = null;
    this.pregled = {
      pritisak: false,
      secer: false,
      holesterol: false
    };
  }

  izabraniDoktor(doktor: Doktor) {
    this.doktor = doktor;
    console.log(`Pacijent ${this.ime} ${this.prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
  }
}