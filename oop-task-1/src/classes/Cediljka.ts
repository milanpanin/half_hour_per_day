import { Posuda } from "./Posuda";

export class Cediljka {
  posuda: Posuda;

  constructor(posuda: Posuda) {
    this.posuda = posuda;
  }

  cedi() {
    this.dobijenoSoka();
  }

  dobijenoSoka() {}
}