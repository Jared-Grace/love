import { greater_than } from "./greater_than.mjs";
import { midi_chords_recover_defects } from "./midi_chords_recover_defects.mjs";
export function midi_chords_recover_gate_run() {
  "Gate: the chord chooser must never hand back a wrong chord while claiming to be sure of it, on any of the written out cases";
  "Choosing wrongly is forgiven here and only choosing wrongly in silence is not, because the whole worth of this tool is that a person reviews the few places it flags rather than every bar. A wrong chord among the sure ones is the one thing that makes reviewing the flags stop being enough. Throws so the dispatcher seam exits nonzero.";
  let defects = midi_chords_recover_defects();
  for (let one of defects) {
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
  console.log("chord chooser defects: " + defects.length);
  if (greater_than(defects.length, 0)) {
    throw new Error(
      "midi chord recover gate: " +
        defects.length +
        " chords came back wrong without being flagged as unsure - did a score change widen a margin that was holding a real doubt open?",
    );
  }
  let r = {
    defects: 0,
  };
  return r;
}
