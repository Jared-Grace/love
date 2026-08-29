import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_lines_timed_cases } from "./lyric_timing_lines_timed_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_timing_lines_timed_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: a passage with lines nobody tapped comes back with those lines carrying no times, and the lines around them ending where the next tapped line begins.");
  ("IT GUARDS THE ONE STEP BETWEEN TAPPING AND A FINISHED VIDEO, and that step used to fail silently. The document written out of a wrong answer here parses, opens on the timing desk, and passes every check that reads it, because a line beginning at second zero and running the length of the song is a shape a real line can have. There is nothing downstream that can tell it apart from a line somebody heard, so it has to be caught where it is made.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = lyric_timing_lines_timed_cases();
  function answer(c) {
    let starts = property_get(c, "starts");
    let texts = property_get(c, "texts");
    let duration = property_get(c, "duration");
    let lines = lyric_timing_lines_timed(starts, texts, duration);
    return lines;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "lines",
    "why",
    "lyric timing lines timed",
  );
  return r;
}
