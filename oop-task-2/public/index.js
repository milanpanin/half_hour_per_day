import { Doktor } from './classes/Doktor.js';
import { Pacijent } from './classes/Pacijent.js';
import { tipPregleda } from './classes/enum.js';
const doktor = new Doktor('Milan', 'Panin', 'kardiolog');
doktor.pregledajPacijenta(tipPregleda.pritisak);
const pacijent = new Pacijent('Milan', 'Milanovic', '123456789', '123456789');
pacijent.izabraniDoktor(doktor);
