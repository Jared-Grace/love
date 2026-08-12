import { bible_verse_end_is_cases } from "./bible_verse_end_is_cases.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function bible_verse_end_is_cases_gate_run() {
  "QA gate: every verse ending the corpus writes down is answered the way it says it should be.";
  "The record next door checks that each bible was read; this checks what reading one means. A mark quietly dropped from the set, or a comma quietly added to it, would leave that record entirely green and change every reading in the repo.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = bible_verse_end_is_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let ends = bible_verse_end_is(text);
    return ends;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "ends",
    "why",
    "bible verse end is",
  );
  return r;
}
