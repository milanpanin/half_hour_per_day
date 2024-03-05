export class Cediljka {
    constructor(posuda) {
        this.sok = 0;
        this.posuda = posuda;
    }
    cedi() {
        const voce = this.posuda.voce;
        voce.map((vocka, index) => {
            if (Math.random() > 0.7) {
                console.log(`${index + 1}. Cedimo: ${vocka.tezina} grama jabuke.`);
                this.sok += vocka.tezina * 0.4;
            }
            else {
                console.log('Ceđenje nije uspelo.');
            }
        });
    }
    dobijenoSoka() {
        return this.sok;
    }
}
