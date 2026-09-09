import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_lines_division_subtitles_dropped_cases } from "./bible_usfm_lines_division_subtitles_dropped_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_lines_division_subtitles_dropped } from "./bible_usfm_lines_division_subtitles_dropped.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bible_usfm_lines_division_subtitles_dropped_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every chapter written down in the corpus keeps exactly the lines the corpus says once the printing's own division subtitles have been taken out.");
  ("★ THIS IS WHERE SCRIPTURE CAN GO MISSING WITHOUT ANYTHING LOOKING WRONG. The line taken out and the line kept are written with the same mark and stand in the same place, so a rule that widened by one step would take a psalm's ascription away and hand back a passage that reads perfectly and is short of its first verse. Nothing below can tell, because a chapter of the right shape is all any of it sees.");
  ("Throws so the dispatcher seam exits nonzero");
  let cases = bible_usfm_lines_division_subtitles_dropped_cases();
  function answer(c) {
    let usfm_lines = property_get(c, "usfm_lines");
    let book_lines = property_get(c, "book_lines");
    let kept = bible_usfm_lines_division_subtitles_dropped(
      usfm_lines,
      book_lines,
    );
    return kept;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "kept",
    "described",
    "bible usfm division subtitles",
  );
  return r;
}
