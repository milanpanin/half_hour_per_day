import { Doktor } from './classes/Doktor.js';
import { Pacijent } from './classes/Pacijent.js';
import { Laboratorija } from './classes/Laboratorija.js';
import { tipPregleda } from './classes/enum.js';

const doktor = new Doktor('Milan', 'Panin', 'kardiolog');
const pacijent = new Pacijent('Milan', 'Milanovic', '123456789', '123456789');
const laboratorija = new Laboratorija();

pacijent.izabraniDoktor(doktor);
doktor.zakazivanjePregleda(pacijent);
laboratorija.merenje(pacijent, tipPregleda.pritisak);
doktor.zakazivanjePregleda(pacijent);
laboratorija.merenje(pacijent, tipPregleda.secer);
