export class Pacijent {
    constructor(ime, prezime, jmbg, brojKartona) {
        this.zakazanPregled = false;
        this.ime = ime;
        this.prezime = prezime;
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
    }
    izabraniDoktor(doktor) {
        console.log(`Pacijent ${this.ime} ${this.prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
    }
}
