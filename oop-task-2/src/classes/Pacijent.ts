import { Doktor } from "./Doktor";

export class Pacijent {
  private _ime: string;
  private _prezime: string;
  private _jmbg: string;
  private _brojKartona: string;


  constructor(ime: string, prezime: string, jmbg: string, brojKartona: string) {
    this._ime = ime;
    this._prezime = prezime;
    this._jmbg = jmbg;
    this._brojKartona = brojKartona;
  }

  izabraniDoktor(doktor: Doktor) {
    console.log(`Pacijent ${this._ime} ${this._prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
  }
}