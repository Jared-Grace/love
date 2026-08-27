import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { harmony_pitch_names } from "./harmony_pitch_names.mjs";
export function harmony_chord_over_bass_name(chord, bass_pitch, spelling) {
  "the name a chord is written by when a particular note is underneath it, which is the plain name on its own root and the name with the bass note after a slash on any other";
  "a chord chart says D over A rather than saying D and leaving the reader to find the bass somewhere else, and the difference is not decoration: a line of chords all standing on their own roots and the same line over a bass walking down through them are two different pieces of music";
  let step = modulo(bass_pitch, 12);
  if (equal(step, chord.root)) {
    let r = chord.name;
    return r;
  }
  let names = harmony_pitch_names()[spelling];
  let r2 = chord.name + "/" + names[step];
  return r2;
}
