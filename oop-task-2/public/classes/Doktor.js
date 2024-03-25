export class Doktor {
    constructor(ime, prezime, specijalnost) {
        this.ime = ime;
        this.prezime = prezime;
        this._specijalnost = specijalnost;
    }
    pregledajPacijenta(tipPregleda) {
        const date = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        const formattedDate = formatter.format(date).split(",")[0];
        console.log(`${formattedDate} ${formatter.format(date).split(", ")[1]}`);
        if (tipPregleda === 'pritisak') {
            this.merenjePritiska();
        }
        else if (tipPregleda === 'secer') {
            this.merenjeSecera();
        }
        else if (tipPregleda === 'holesterol') {
            this.merenjeHolesterola();
        }
    }
    merenjePritiska() {
        console.log('Merenje pritiska');
    }
    merenjeSecera() { }
    merenjeHolesterola() { }
}
