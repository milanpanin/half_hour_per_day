// import { Jabuka } from './classes/Jabuka';
import { Jabuka } from './classes/Jabuka.js';
import { Cediljka } from './classes/Cediljka.js';
import { Posuda } from './classes/Posuda.js';
// TODO 
// Metoda za generisanje jabuka
const jabuka1 = new Jabuka(120, false, 3);
const jabuka2 = new Jabuka(100, true, 2);
const posuda = new Posuda(10);
posuda.dodajVoce(jabuka1);
posuda.dodajVoce(jabuka2);
console.log(`Broj dodatih voćki u posudi: ${posuda.brojDodatihVocki()}`);
console.log(`Slobodni kapacitet posude: ${posuda.slobodnoMesta()}`);
const cediljka = new Cediljka(posuda);
console.log('\n ----Ceđenje----');
cediljka.cedi();
console.log('----Kraj ceđenja---- \n');
console.log(`Dobijeno soka: ${cediljka.dobijenoSoka()} ml (od prilike).`);
