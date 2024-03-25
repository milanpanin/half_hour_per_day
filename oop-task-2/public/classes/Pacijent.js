export class Pacijent {
    constructor(ime, prezime, jmbg, brojKartona) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
        this._brojKartona = brojKartona;
    }
    izabraniDoktor(doktor) {
        console.log(`Pacijent ${this._ime} ${this._prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
    }
}
