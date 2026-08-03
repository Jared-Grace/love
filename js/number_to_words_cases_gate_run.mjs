import { property_get } from "./property_get.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { number_to_words_cases } from "./number_to_words_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function number_to_words_cases_gate_run() {
  "QA gate: every number the corpus writes down is read out in the words it says.";
  "Nothing checked this reading, and its only caller was asking about the number two, so a fault covering every number from twenty to ninety-nine sat in the repo saying the word undefined and no run of anything went red.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = number_to_words_cases();
  function answer(c) {
    let number = property_get(c, "number");
    let words = number_to_words(number);
    return words;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "words",
    "why",
    "number to words",
  );
  return r;
}
