export class Cediljka {
    constructor(posuda) {
        this.sok = 0;
        this.posuda = posuda;
    }
    cedi() {
        const voce = this.posuda.voce;
        voce.map(vocka => {
            console.log(`Cedimo: ${vocka.tezina} grama jabuke.`);
            this.sok += vocka.tezina * 0.4;
        });
    }
    dobijenoSoka() {
        return this.sok;
    }
}
