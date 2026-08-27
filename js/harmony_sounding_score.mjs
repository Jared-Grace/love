import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
export function harmony_sounding_score(sounding, chord) {
  "scores how well the notes sounding over a stretch agree with one chord counting each note by how long it lasts";
  "a note outside the chord argues against it unless it is stepped into and stepped out of off the beat which is a note passing through rather than a note the chord has to hold";
  let total = 0;
  let agreed = 0;
  for (let note_one of sounding) {
    let step = modulo(note_one.pitch, 12);
    total = total + note_one.weight;
    if (chord.steps.includes(step)) {
      agreed = agreed + note_one.weight;
    } else {
      let excuse = 1;
      if (note_one.stepwise) {
        excuse = note_one.on_beat ? 0.35 : 0.15;
      }
      let left = multiply(note_one.weight, 1.2);
      let right = multiply(left, excuse);
      agreed = subtract(agreed, right);
    }
  }
  if (equal(total, 0)) {
    let r = 0;
    return r;
  }
  let left2 = divide(agreed, total);
  let p = multiply(left2, 2.5);
  return p;
}
