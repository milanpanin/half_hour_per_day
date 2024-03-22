import { Doktor } from './classes/Doktor.js';

enum tipPregleda {
  pritisak = 'pritisak',
  secer = 'secer',
  holesterol = 'holesterol'
}

const doktor = new Doktor('Milan', 'Panin', 'kardiolog');
doktor.pregledajPacijenta(tipPregleda.pritisak)
