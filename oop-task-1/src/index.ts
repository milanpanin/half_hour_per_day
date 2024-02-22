// import { Jabuka } from './classes/Jabuka';
import { Jabuka } from './classes/Jabuka.js';
import { Cediljka } from './classes/Cediljka';
import { Posuda} from './classes/Posuda';

const jabuka = new Jabuka(100, false, 2);
const posuda = new Posuda(10);
posuda.dodajVoce(jabuka);
