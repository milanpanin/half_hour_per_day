// import { Jabuka } from './classes/Jabuka';
import { Jabuka } from './classes/Jabuka.js';
import { Cediljka } from './classes/Cediljka.js';
import { Posuda } from './classes/Posuda.js';
import * as fs from 'fs';

const posuda = new Posuda(200);

const dodajJabukeUPosudu = (brojJabuka: number) => {
  for (let i = 0; i < brojJabuka; i++) {
    const jabuka = new Jabuka(Math.floor(Math.random() * 500) + 100, Math.random() > 0.8, Math.floor(Math.random() * 3) + 1);
    const response = posuda.dodajVoce(jabuka);

    if (!response) return;
  }
}

dodajJabukeUPosudu(1000);

// Kreiranje poruke za ispis
let poruka = `Broj dodatih voćki u posudi: ${posuda.brojDodatihVocki()}.\n`;
poruka += `Slobodni kapacitet posude: ${posuda.slobodnoMesta()}.\n`;
poruka += `Dostupna tezina posude: ${posuda.dostupnaTezinaPosude()} grama.\n`;

// Ceđenje
const cediljka = new Cediljka(posuda);
poruka += '\nStartovanje ceđenja! \n\n';
cediljka.cedi();

poruka += `Dobijeno soka: ${cediljka.dobijenoSoka().toFixed(2)} ml (od prilike).\n`;

fs.writeFileSync('status.txt', poruka);
