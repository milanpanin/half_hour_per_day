export class Doktor {
    ime;
    prezime;
    specijalnost;
    constructor(ime, prezime, specijalnost) {
        this.ime = ime;
        this.prezime = prezime;
        this.specijalnost = specijalnost;
    }
    zakazivanjePregleda(pacijent, tip) {
        if (pacijent.doktor === this) {
            pacijent.pregled[tip] = true;
            console.log(`Doktor ${this.ime} ${this.prezime} je zakazao pregled za ${tip} pacijenta ${pacijent.ime} ${pacijent.prezime}.`);
        }
        else {
            console.log(`Doktor ${this.ime} ${this.prezime} nije izabrani doktor pacijenta ${pacijent.ime} ${pacijent.prezime} i ne može zakazati pregled.`);
        }
    }
}
