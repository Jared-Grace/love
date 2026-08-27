import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { midi_case_bytes } from "./midi_case_bytes.mjs";
import { midi_bytes_chords_chosen } from "./midi_bytes_chords_chosen.mjs";
export function midi_chords_recover_defects(cases) {
  "runs every written out case through the whole chord chooser and answers the places where it was both wrong and sure of itself";
  "being wrong is allowed as long as it says it is unsure because the person reviewing reads exactly the unsure places and a wrong chord hidden among the sure ones is the only failure that costs them anything";
  "the cases are handed in rather than fetched here so that the gate above is the one holding the corpus, which is what lets a sweep see the corpus is actually read";
  "each case names the chord vocabulary it was written for, because the same bass note under the same melody is harmonised differently by a chorale and by a modern worship song and a case scored against the wrong vocabulary would be reporting on the vocabulary rather than on the chooser";
  let defects = [];
  let checked = 0;
  for (let one of cases) {
    let bytes = midi_case_bytes(one);
    let read = midi_bytes_chords_chosen(bytes, one.style);
    for (let index = 0; less_than(index, one.want.length); index++) {
      let pick = read.chosen[index];
      let got = equal(pick, undefined) ? "nothing" : pick.chord.name;
      let right =
        equal(got, one.want[index]) || equal(got, one.want[index] + "7");
      let sure = not_equal(pick, undefined) && pick.settled;
      checked = checked + 1;
      if (equal(right, false) && sure) {
        defects.push({
          title: one.title,
          at: index + 1,
          want: one.want[index],
          got,
          key: read.key.name,
        });
      }
    }
  }
  let r = {
    defects,
    checked,
  };
  return r;
}
