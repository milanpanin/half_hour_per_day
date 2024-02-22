import { Posuda } from "./Posuda";

export class Cediljka {
  posuda: Posuda;

  constructor(posuda: Posuda) {
    this.posuda = posuda;
  }

  cedi() {
    const voce = this.posuda.voce;

    voce.map(vocka => {
      console.log(`Cedimo ${vocka.tezina}`);
    });

    this.dobijenoSoka();
  }

  dobijenoSoka() {}
}