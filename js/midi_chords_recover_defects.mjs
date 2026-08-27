import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { midi_chords_recover_cases } from "./midi_chords_recover_cases.mjs";
import { midi_bytes_chords_chosen } from "./midi_bytes_chords_chosen.mjs";
import { midi_case_bytes } from "./midi_case_bytes.mjs";
export function midi_chords_recover_defects() {
  "runs every written out case through the whole chord chooser and answers the places where it was both wrong and sure of itself";
  "being wrong is allowed as long as it says it is unsure because the person reviewing reads exactly the unsure places and a wrong chord hidden among the sure ones is the only failure that costs them anything";
  let defects = [];
  for (let one of midi_chords_recover_cases()) {
    let bytes = midi_case_bytes(one);
    let read = midi_bytes_chords_chosen(bytes);
    for (let index = 0; less_than(index, one.want.length); index++) {
      let pick = read.chosen[index];
      let got = equal(pick, undefined) ? "nothing" : pick.chord.name;
      let right =
        equal(got, one.want[index]) || equal(got, one.want[index] + "7");
      let sure = not_equal(pick, undefined) && pick.settled;
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
  return defects;
}
