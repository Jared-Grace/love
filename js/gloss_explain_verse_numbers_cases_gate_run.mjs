import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_cases } from "./gloss_explain_verse_numbers_cases.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_verse_numbers } from "./gloss_explain_verse_numbers.mjs";
import { list_join } from "./list_join.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function gloss_explain_verse_numbers_cases_gate_run() {
  "QA gate: the one door reading verse claims names the verses each written case says it names, in English and in Urdu alike. Throws so the dispatcher seam exits nonzero.";
  "★ THE FAILURE THIS GUARDS IS SILENCE, NOT A WRONG ANSWER. A reading that cannot see a language, or cannot see a number too long to fit in one word, comes back empty - and empty is also the honest answer for a sentence that names no verse. So the corpus is the only place the difference shows, and it shows only because it holds sentences in both languages and verses either side of a hundred.";
  "The door is asked rather than either reading behind it, because the door is what every sweep calls and because a reading left out of the door would pass its own case and still never run.";
  arguments_assert(arguments, 0);
  let cases = gloss_explain_verse_numbers_cases();
  function answer(c) {
    let explain = property_get(c, "explain");
    let verses = property_get(c, "verses");
    let named = gloss_explain_verse_numbers(explain, verses);
    let joined = list_join(named, ",");
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "names",
    "why",
    "gloss explain verse numbers",
  );
  return r;
}
