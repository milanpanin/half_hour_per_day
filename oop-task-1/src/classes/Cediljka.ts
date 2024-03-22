import { Posuda } from "./Posuda.js";

export class Cediljka {
  posuda: Posuda;
  sok: number = 0;

  constructor(posuda: Posuda) {
    this.posuda = posuda;
  }

  cedi(): void {
    const voce = this.posuda.voce;

    voce.map((vocka, index) => {
      if(Math.random() > 0.7) {
        console.log(`${index + 1}. Cedimo: ${vocka.tezina} grama jabuke.`);
        this.sok += vocka.tezina * 0.4;
      } else {
        console.log('Ceđenje nije uspelo.');
      }
    });
  }

  dobijenoSoka(): number {
    return this.sok;
  }
}