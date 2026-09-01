import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_line_tapped_cases } from "./lyric_timing_line_tapped_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_timing_line_tapped } from "./lyric_timing_line_tapped.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_timing_line_tapped_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Opens every line in the corpus the way the timing screen opens a saved document, and refuses the run when one of them comes back as something other than what the hand actually pressed.");
  ("THE STEP THIS GUARDS IS THE ONE THAT CANNOT REPORT ITSELF. Every moment it can return is a plausible moment, so a wrong one is a number in the right place, in the right units, on the right line, and nothing downstream has anything to compare it against. It shows up as a video whose words run ahead of the singing, days later, in a room where the tap lag is the obvious suspect and this is not.");
  ("It is a gate rather than a read of the screen because the fault is worth catching before a document is written, not after. What the screen loads is written back out on the way to a video, so a bad load becomes the record - and then it is the tapped moments, the only evidence of where the line was really heard, that have been overwritten.");
  let cases = lyric_timing_line_tapped_cases();
  function answer(one) {
    let line = property_get(one, "line");
    let line_hand = lyric_timing_line_tapped(line);
    return line_hand;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "line_hand",
    "why",
    "lyric timing line tapped",
  );
  return r;
}
