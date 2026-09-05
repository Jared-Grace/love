import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_verse_end_read_cases } from "./bible_usfm_verse_end_read_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_verse_end_read } from "./bible_usfm_verse_end_read.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bible_usfm_verse_end_read_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every end of a passage written down in the corpus is read as the verse and piece the corpus says, and the ones that are not ends of passages are refused.");
  ("★ THIS IS WHERE A PASSAGE SILENTLY BECOMES A DIFFERENT PASSAGE. Everything below counts pieces from this one reading, so a piece read one out would cut Psalm 145 in the wrong place and hand back words that read perfectly well and are not the ones being sung. Nothing further down can tell, because a passage of the right shape is all any of it can check.");
  ("Throws so the dispatcher seam exits nonzero");
  let cases = bible_usfm_verse_end_read_cases();
  function answer(c) {
    let end = property_get(c, "end");
    let read = bible_usfm_verse_end_read(end);
    return read;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "read",
    "described",
    "bible usfm verse end",
  );
  return r;
}
