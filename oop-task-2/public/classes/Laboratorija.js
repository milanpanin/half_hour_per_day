export class Laboratorija {
    constructor() { }
    merenje(pacijent, tipPregleda) {
        if (Object.values(pacijent.pregled).every(value => !value)) {
            console.log('Pacijent nije zakazao pregled!');
            return;
        }
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
            this.merenjePritiska(pacijent);
        }
        else if (tipPregleda === 'secer') {
            this.merenjeSecera(pacijent);
        }
        else if (tipPregleda === 'holesterol') {
            this.merenjeHolesterola(pacijent);
        }
    }
    merenjePritiska(pacijent) {
        console.log('Merenje pritiska izvršeno!');
        pacijent.pregled.pritisak = false;
    }
    merenjeSecera(pacijent) {
        console.log('Merenje secera izvršeno!');
        pacijent.pregled.secer = false;
    }
    merenjeHolesterola(pacijent) {
        console.log('Merenje holesterola izvršeno!');
        pacijent.pregled.holesterol = false;
    }
}
