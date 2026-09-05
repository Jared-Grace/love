import { text_word_plain_canonical_cases } from "./text_word_plain_canonical_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_word_plain_canonical } from "./text_word_plain_canonical.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_word_plain_canonical_cases_gate_run() {
  "QA gate: each word written down in the corpus comes back in the one spelling the corpus says it should be compared by.";
  "★ IT GUARDS A LIST THAT IS CHEAP TO ADD TO AND EXPENSIVE TO ADD TO WRONGLY. Every entry deletes a distinction from every comparison in the repo at once, and a wrong entry shows up as two different words agreeing - which looks like success and is reported as success. The cases that must not fold are what turn a later addition into something that can fail here rather than something that quietly widens.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = text_word_plain_canonical_cases();
  function answer(c) {
    let word = property_get(c, "word");
    let plain = text_word_plain_canonical(word);
    return plain;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "plain",
    "name",
    "text word plain canonical",
  );
  return r;
}
