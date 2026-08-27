import { modulo } from "./modulo.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
export function harmony_sounding_score(sounding, chord) {
  "scores how well the notes sounding over a stretch agree with one chord, counting each note by how long it lasts and by how much it says";
  "a note passing through says little about the chord underneath it either way, so its weight is cut before it is counted rather than only when it disagrees";
  "cutting it only on the disagreeing side was tried first and it let any chord shaped to swallow the passing note win outright: a suspended chord contains the very note a plain triad was being forgiven for, so forgiveness on one side alone handed it the argument";
  "what is divided by is the whole length sounding rather than the part that spoke, so a stretch whose notes are all passing comes out near nothing instead of coming out certain on the strength of a scrap";
  let total = 0;
  let agreed = 0;
  for (let note_one of sounding) {
    let step = modulo(note_one.pitch, 12);
    total = total + note_one.weight;
    let said = note_one.weight;
    if (note_one.stepwise) {
      said = multiply(note_one.weight, note_one.on_beat ? 0.35 : 0.15);
    }
    if (chord.steps.includes(step)) {
      agreed = agreed + said;
    } else {
      let right = multiply(said, 1.2);
      agreed = subtract(agreed, right);
    }
  }
  if (equal(total, 0)) {
    let r = 0;
    return r;
  }
  let left = divide(agreed, total);
  let p = multiply(left, 2.5);
  return p;
}
