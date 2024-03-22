// interface tipPregleda {
//   pritisak: string;
//   secer: string;
//   holesterol: string;
// }
var tipPregleda;
(function (tipPregleda) {
    tipPregleda["pritisak"] = "pritisak";
    tipPregleda["secer"] = "secer";
    tipPregleda["holesterol"] = "holesterol";
})(tipPregleda || (tipPregleda = {}));
export class Doktor {
    constructor(ime, prezime, specijalnost) {
        this.ime = ime;
        this.prezime = prezime;
        this.specijalnost = specijalnost;
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
    merenjePritiska() { }
    merenjeSecera() { }
    merenjeHolesterola() { }
}
