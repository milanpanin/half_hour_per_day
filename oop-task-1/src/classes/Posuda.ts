import { Voce } from './Voce';
import { Jabuka } from './Jabuka';

export class Posuda {
  dostupnaTezina: number = 30000;
  slobodanKapacitet: number;
  borojVocki: number = 0;
  voce: Voce[];

  constructor(kapacitet: number) {
    this.voce = [];
    this.slobodanKapacitet = kapacitet;
  }

  dodajVoce(novoVoce: Jabuka) {
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