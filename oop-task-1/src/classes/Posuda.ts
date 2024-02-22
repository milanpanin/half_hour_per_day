import { Voce } from './Voce';
import { Jabuka } from './Jabuka';

export class Posuda {
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
      return;
    }

    if (this.slobodanKapacitet < novoVoce.zapremina) {
      console.log('Nema mesta za voce!');
      return;
    }

    this.slobodanKapacitet -= novoVoce.zapremina;
    this.borojVocki++;
    this.voce.push(novoVoce);

    console.log('Voce je dodato u posudu!');
  }

  brojDodatihVocki() {
    return this.borojVocki;
  }

  slobodnoMesta() {
    return this.slobodanKapacitet;
  }
}