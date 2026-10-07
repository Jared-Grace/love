import { gloss_term_written_is_cases } from "./gloss_term_written_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_term_written_is } from "./gloss_term_written_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function gloss_term_written_is_cases_gate_run() {
  "QA gate: every piece of writing the corpus names is read for its grammatical word the way the corpus says it should be.";
  "This reading decides whether a gate accuses a sentence, so getting it wrong is never seen as a wrong answer on a screen - it is seen as a finding against writing that was right, and the ordinary way to quiet a finding is to change the writing. Two such findings were raised and the writing was nearly changed to satisfy them.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = gloss_term_written_is_cases();
  function answer(c) {
    let wording = property_get(c, "wording");
    let term = property_get(c, "term");
    let written = gloss_term_written_is(wording, term);
    return written;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "written",
    "why",
    "gloss term written is",
  );
  return r;
}
