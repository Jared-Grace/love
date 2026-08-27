import { greater_than } from "./greater_than.mjs";
import { midi_chords_recover_cases } from "./midi_chords_recover_cases.mjs";
import { midi_chords_recover_defects } from "./midi_chords_recover_defects.mjs";
export function midi_chords_recover_gate_run() {
  "Gate: the chord chooser must never hand back a wrong chord while claiming to be sure of it, on any of the written out cases";
  "Choosing wrongly is forgiven here and only choosing wrongly in silence is not, because the whole worth of this tool is that a person reviews the few places it flags rather than every bar. A wrong chord among the sure ones is the one thing that makes reviewing the flags stop being enough. Throws so the dispatcher seam exits nonzero.";
  "The count of chords looked at is printed beside the count of defects because no defects also reads as a pass when the corpus has quietly stopped being run at all.";
  let cases = midi_chords_recover_cases();
  let found = midi_chords_recover_defects(cases);
  for (let one of found.defects) {
    console.log(
      "sure and wrong  " +
        one.title +
        " chord " +
        one.at +
        ": wanted " +
        one.want +
        " got " +
        one.got,
    );
  }
  console.log(
    "chord chooser defects: " +
      found.defects.length +
      " of " +
      found.checked +
      " chords",
  );
  if (greater_than(found.defects.length, 0)) {
    throw new Error(
      "midi chord recover gate: " +
        found.defects.length +
        " chords came back wrong without being flagged as unsure - did a score change widen a margin that was holding a real doubt open?",
    );
  }
  let r = {
    defects: 0,
    checked: found.checked,
  };
  return r;
}
