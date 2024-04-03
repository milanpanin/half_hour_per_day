export class Doktor {
    constructor(ime, prezime, specijalnost) {
        this.ime = ime;
        this.prezime = prezime;
        this.specijalnost = specijalnost;
    }
    zakazivanjePregleda(pacijent) {
        pacijent.zakazanPregled = true;
        console.log(`Pregled je zakazan za pacijenta ${pacijent.ime} ${pacijent.prezime}`);
    }
}
