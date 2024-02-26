// import { Jabuka } from './classes/Jabuka';
import { Jabuka } from './classes/Jabuka.js';
import { Cediljka } from './classes/Cediljka.js';
import { Posuda } from './classes/Posuda.js';
const posuda = new Posuda(200);
const dodajJabukeUPosudu = (brojJabuka) => {
    for (let i = 0; i < brojJabuka; i++) {
        const jabuka = new Jabuka(Math.floor(Math.random() * 200) + 100, Math.random() > 0.5, Math.floor(Math.random() * 3) + 1);
        posuda.dodajVoce(jabuka);
    }
};
dodajJabukeUPosudu(100);
console.log('\n---------------- INFO ----------------');
console.log(`Broj dodatih voćki u posudi: ${posuda.brojDodatihVocki()}`);
console.log(`Slobodni kapacitet posude: ${posuda.slobodnoMesta()}`);
console.log('---------------- INFO ---------------- \n');
const cediljka = new Cediljka(posuda);
console.log('\n---------------- Ceđenje ----------------');
cediljka.cedi();
console.log('---------------- Ceđenje ---------------- \n');
console.log(`Dobijeno soka: ${cediljka.dobijenoSoka().toFixed(2)} ml (od prilike).`);
