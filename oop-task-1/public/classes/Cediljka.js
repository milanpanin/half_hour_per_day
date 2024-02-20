export class Cediljka {
    constructor(posuda) {
        this.posuda = posuda;
    }
    cedi() {
        const voce = this.posuda.voce;
        voce.map(vocka => {
            console.log(`Cedimo ${vocka.tezina}`);
        });
        this.dobijenoSoka();
    }
    dobijenoSoka() { }
}
