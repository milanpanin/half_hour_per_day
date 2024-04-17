export class Pacijent {
    ime;
    prezime;
    jmbg;
    brojKartona;
    doktor;
    pregled;
    constructor(ime, prezime, jmbg, brojKartona) {
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
    izabraniDoktor(doktor) {
        this.doktor = doktor;
        console.log(`Pacijent ${this.ime} ${this.prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`);
    }
}
