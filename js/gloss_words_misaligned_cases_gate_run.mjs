import { gloss_words_misaligned_cases } from "./gloss_words_misaligned_cases.mjs";
import { gloss_words_misaligned } from "./gloss_words_misaligned.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_words_misaligned_cases_gate_run() {
  "QA gate: every pair of word lists the corpus writes down is judged to line up, or not to, the way it says.";
  "The gates over the stores themselves can only say how many chapters are red today, and a store is content rather than code - it changes under this reading without this reading changing. So they cannot tell a rule that got looser from a store that got better. This can: it asks the rule the same questions every time and the answers cannot move unless somebody moves them.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = gloss_words_misaligned_cases();
  function answer(c) {
    let written = property_get(c, "written");
    let explained = property_get(c, "explained");
    let difference = gloss_words_misaligned(written, explained);
    let aligned = null_is(difference);
    return aligned;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "aligned",
    "why",
    "gloss words misaligned",
  );
  return r;
}
