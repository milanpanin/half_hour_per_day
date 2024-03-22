import { Doktor } from './classes/Doktor.js';
var tipPregleda;
(function (tipPregleda) {
    tipPregleda["pritisak"] = "pritisak";
    tipPregleda["secer"] = "secer";
    tipPregleda["holesterol"] = "holesterol";
})(tipPregleda || (tipPregleda = {}));
const doktor = new Doktor('Milan', 'Panin', 'kardiolog');
doktor.pregledajPacijenta(tipPregleda.pritisak);
