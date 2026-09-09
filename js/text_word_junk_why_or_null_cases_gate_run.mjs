import { arguments_assert } from "./arguments_assert.mjs";
import { text_word_junk_why_or_null_cases } from "./text_word_junk_why_or_null_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_word_junk_why_or_null } from "./text_word_junk_why_or_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_word_junk_why_or_null_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every word written down in the corpus gets exactly the answer the corpus gives about whether English makes words that shape.");
  ("★ THIS IS THE HALF OF THE JUNK SWEEP THAT CAN GO RED. The sweep itself reads eleven hundred and eighty nine chapters and comes back empty, because everything it once found has been mended on the way in - so from the sweep alone there is no telling a clean bible from a checker that stopped working. Here the broken words are written out and the answers are pinned, so the test has to keep firing.");
  ("Throws so the dispatcher seam exits nonzero");
  let cases = text_word_junk_why_or_null_cases();
  function answer(c) {
    let word = property_get(c, "word");
    let why = text_word_junk_why_or_null(word);
    return why;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "why",
    "described",
    "text word junk",
  );
  return r;
}
