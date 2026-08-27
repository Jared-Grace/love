import { fn_name } from "./fn_name.mjs";
import { harmony_key_degrees } from "./harmony_key_degrees.mjs";
import { modulo } from "./modulo.mjs";
import { harmony_chord } from "./harmony_chord.mjs";
export function harmony_key_chords(key, style) {
  "answers every chord a key offers as a candidate the scorer may choose from";
  ("a key here is what ",
    fn_name("midi_notes_key"),
    " answered so it carries the tonic and the mode and how the notes are spelled");
  ("style names which vocabulary is offered and ",
    fn_name("harmony_key_degrees"),
    " holds the ones there are");
  let chords = [];
  for (let degree of harmony_key_degrees(key.mode, style)) {
    let root = modulo(key.tonic + degree.step_above, 12);
    let r = harmony_chord(root, degree.quality, key.spelling, degree.distance);
    chords.push(r);
  }
  return chords;
}
