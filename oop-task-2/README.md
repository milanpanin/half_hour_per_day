Zadatak: Simulacija sistema zdravstvene ustanove

Karakteristike sistema zdravstvene ustanove su:
  • Doktor (ime, prezime, specijalnost) ima više pacijenata (ime, prezime, jmbg, broj
  zdravstvenog kartona).
  • Pacijent moze da ima samo jednog doktora.
  • Doktor moze da zakaže laboratorijski pregled za pacijenta.
  • Svaki laboratorijski pregled ima datum i vreme kada je zakazan
  • Tipovi laboratorijskog pregleda su:
  o krvni pritisak (gornja vrednost, donja vrednost, puls)
  o nivo šećera u krvi (vrednost, vreme poslednjeg obroka)
  o nivo holesterola u krvi (vrednost, vreme poslednjeg obroka)

Napraviti simulacionu skriptu koja radi sledeće:
  1. kreirati doktora “Milan”
  2. kreirati pacijenta “Dragan”
  3. pacijent “Dragan” bira doktora “Milan” za svog izabranog lekara
  4. doktor “Milan” zakazuje pregled za merenje nivoa šećera u krvi za pacijenta “Dragan”
  5. doktor “Milan” zakazuje pregled za merenje krvnog pritiska za pacijenta “Dragan”
  6. pacijent “Dragan” obavlja laboratorijski pregled za merenje nivoa šećera u krvi. Simuliratii prikazati rezultate.
  7. pacijent “Dragan” obavlja laboratorijski pregled za merenje krvnog pritiska. Simulirati iprikazati rezultate.
  Dodati logovanje akcija u sistemu. Akcije logovati u fajl u formatu [datum] [vreme] [akcija].
  Primer jedne linije log fajla: [20.03.2013 19:30] Kreiran pacijent “Milan”

Akcije koje treba da se loguju su:
  1. kreiranje doktora
  2. kreiranje pacijenta
  3. pacijent bira doktora
  4. obavljanje laboratorijskog pregled