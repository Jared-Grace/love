import { property_get } from "./property_get.mjs";
import { beats_seconds } from "./beats_seconds.mjs";
import { beats_seconds_cases } from "./beats_seconds_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function beats_seconds_cases_gate_run() {
  "QA gate: a count of beats at a stated speed still comes out as the length it should.";
  "THIS ONE IS HELD BECAUSE ITS FAULT IS INAUDIBLE TO EVERY CHECK EXCEPT A PERSON. Every number a splice is cut on comes from here, and a wrong one produces a file of the right length, in the right format, passing every other gate in this repo, that simply has its join in the wrong place. Nothing downstream can tell - a join is only wrong relative to a performance nobody has measured - so the arithmetic has to be pinned at the source or it is checked by ear at the far end, once per recording, forever.";
  "Throws so the dispatcher seam exits nonzero.";
  function answer(one_case) {
    let beat_count = property_get(one_case, "beat_count");
    let beats_per_minute = property_get(one_case, "beats_per_minute");
    let seconds = beats_seconds(beat_count, beats_per_minute);
    return seconds;
  }
  let cases = beats_seconds_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "seconds",
    "why",
    "how long a count of beats lasts at a stated speed",
  );
  return r;
}
