import { Posuda } from "./Posuda";

export class Cediljka {
  posuda: Posuda;
  sok: number = 0;

  constructor(posuda: Posuda) {
    this.posuda = posuda;
  }

  cedi() {
    const voce = this.posuda.voce;

    voce.map((vocka, index) => {
      console.log(`${index + 1}. Cedimo: ${vocka.tezina} grama jabuke.`);
      this.sok += vocka.tezina * 0.4;
    });
  }

  dobijenoSoka() {
    return this.sok;
  }
}