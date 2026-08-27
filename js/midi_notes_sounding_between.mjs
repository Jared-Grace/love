import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
export function midi_notes_sounding_between(
  notes,
  start,
  end,
  ticks_per_beat,
  share,
) {
  "gathers every note still sounding between two ticks and weighs each one by how much of that stretch it fills measured in beats";
  "share scales the weight down for a voice that is evidence about the chord without being the tune the ear follows";
  let sounding = [];
  for (let note_one of notes) {
    let from = math_max(note_one.start, start);
    let until = math_min(note_one.end, end);
    if (greater_than(until, from)) {
      let top = subtract(until, from);
      let left = divide(top, ticks_per_beat);
      let weight = multiply(left, share);
      let left2 = modulo(note_one.start, ticks_per_beat);
      let on_beat = equal(left2, 0);
      let stepwise = equal(note_one.stepwise, true);
      sounding.push({
        pitch: note_one.pitch,
        weight,
        on_beat,
        stepwise,
      });
    }
  }
  return sounding;
}
