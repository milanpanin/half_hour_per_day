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
        pacijent.pregled[tip] = true;
        console.log(`Pregled je zakazan za pacijenta ${pacijent.ime} ${pacijent.prezime}`);
    }
}
