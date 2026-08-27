import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
export function harmony_root_move_score(chord, chord_before) {
  "scores the move from the chord before this one to this one by how far the two roots stand apart";
  "a root falling a fifth is the move western harmony makes most often so it is preferred and a root moving by a step is next";
  if (equal(chord_before, null)) {
    let r = 0;
    return r;
  }
  let move = modulo(subtract(chord.root, chord_before.root) + 12, 12);
  if (equal(move, 5)) {
    let r2 = 0.8;
    return r2;
  }
  if (equal(move, 7)) {
    let r3 = 0.3;
    return r3;
  }
  if (equal(move, 2) || equal(move, 10)) {
    let r4 = 0.3;
    return r4;
  }
  if (equal(move, 0)) {
    let r5 = equal(chord.quality, chord_before.quality) ? 0.5 : -0.3;
    return r5;
  }
  let r6 = 0;
  return r6;
}
