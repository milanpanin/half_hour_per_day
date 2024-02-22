import { Voce } from './Voce';

export class Posuda {
  slobodanKapacitet: number;
  borojVocki: number = 0;
  voce: Voce[];

  constructor(kapacitet: number) {
    this.voce = [];
    this.slobodanKapacitet = kapacitet;
  }

  dodajVoce(novoVoce: Voce) {
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
    console.log(this.borojVocki);
  }

  slobodnoMesta() {
    return this.slobodanKapacitet;
  }
}