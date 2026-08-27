import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
export function harmony_bass_place_score(chord, bass_pitch) {
  "scores how willingly a chord accepts the given bass note underneath it";
  "a chord standing on its root is the ordinary case a chord standing on its third is common and a chord standing on its fifth is rare enough to argue against";
  let step = modulo(bass_pitch, 12);
  let place = chord.steps.indexOf(step);
  if (equal(place, 0)) {
    let r = 3;
    return r;
  }
  if (equal(place, 1)) {
    let r2 = 0.8;
    return r2;
  }
  if (equal(place, 2)) {
    let r3 = -1.5;
    return r3;
  }
  if (equal(place, 3)) {
    let r4 = -0.5;
    return r4;
  }
  let r5 = -6;
  return r5;
}
