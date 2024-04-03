import { Doktor } from "./Doktor";

export class Pacijent {
  ime: string;
  prezime: string;
  jmbg: string;
  brojKartona: string;
  zakazanPregled: boolean = false;

  constructor(ime: string, prezime: string, jmbg: string, brojKartona: string) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojKartona = brojKartona;
  }

  izabraniDoktor(doktor: Doktor) {
    console.log(`Pacijent ${this.ime} ${this.prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
  }
}