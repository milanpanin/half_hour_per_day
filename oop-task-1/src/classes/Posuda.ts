import { Voce } from './Voce.js';
import { Jabuka } from './Jabuka.js';

export class Posuda {
  dostupnaTezina: number = 30000;
  slobodanKapacitet: number;
  borojVocki: number = 0;
  voce: Voce[];

  constructor(kapacitet: number) {
    this.voce = [];
    this.slobodanKapacitet = kapacitet;
  }

  dodajVoce(novoVoce: Jabuka): boolean {
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

  brojDodatihVocki(): number {
    return this.borojVocki;
  }

  slobodnoMesta(): number {
    return this.slobodanKapacitet;
  }

  dostupnaTezinaPosude(): number {
    return this.dostupnaTezina;
  }
}