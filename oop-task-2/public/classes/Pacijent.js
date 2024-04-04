export class Pacijent {
    ime;
    prezime;
    jmbg;
    brojKartona;
    pregled;
    constructor(ime, prezime, jmbg, brojKartona) {
        this.ime = ime;
        this.prezime = prezime;
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
        this.pregled = {
            pritisak: false,
            secer: false,
            holesterol: false
        };
    }
    izabraniDoktor(doktor) {
        console.log(`Pacijent ${this.ime} ${this.prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
    }
}
