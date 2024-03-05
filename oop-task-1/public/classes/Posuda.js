export class Posuda {
    constructor(kapacitet) {
        this.dostupnaTezina = 30000;
        this.borojVocki = 0;
        this.voce = [];
        this.slobodanKapacitet = kapacitet;
    }
    dodajVoce(novoVoce) {
        if (novoVoce.crvljivo) {
            console.log('Ne mozemo dodati crvljivo voce!');
            return true;
        }
        if (this.slobodanKapacitet < novoVoce.zapremina) {
            console.log('Nema mesta za voce!');
            return false;
        }
        if (this.dostupnaTezina < novoVoce.tezina) {
            console.log('Premašili ste maksimalnu težinu cediljke(posude)!');
            return false;
        }
        if (Math.random() > 0.3) {
            console.log('Dodavanje vocke nije uspelo!');
            return true;
        }
        this.slobodanKapacitet -= novoVoce.zapremina;
        this.borojVocki++;
        this.dostupnaTezina -= novoVoce.tezina;
        this.voce.push(novoVoce);
        console.log('Voce je dodato u posudu!');
        return true;
    }
    brojDodatihVocki() {
        return this.borojVocki;
    }
    slobodnoMesta() {
        return this.slobodanKapacitet;
    }
    dostupnaTezinaPosude() {
        return this.dostupnaTezina;
    }
}
