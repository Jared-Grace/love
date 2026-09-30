import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_number_words_cases } from "./gloss_explain_verse_number_words_cases.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_verse_number_words } from "./gloss_explain_verse_number_words.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { null_is } from "./null_is.mjs";
import { list_join } from "./list_join.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function gloss_explain_verse_number_words_cases_gate_run() {
  "QA gate: the reading that says which word a verse claim is about answers each written case the way the case says. Throws so the dispatcher seam exits nonzero.";
  "★ THE FAILURE THIS GUARDS IS AN ACCUSATION AGAINST A SENTENCE THAT WAS RIGHT, AND NOTHING ELSE IN THE REPO CAN SEE IT. The sweep over every chapter counts wrong claims and a baseline holds them by name, so a reading that starts asking the wrong verse the wrong question moves rows in and out of that list and the count stays the same size. Every fault this reading has had was found by a person opening one chapter and reading one sentence.";
  "The answer is flattened to one line per case so the corpus can be read and argued with, and so that an answer coming back with nothing in it fails a case rather than matching one.";
  arguments_assert(arguments, 0);
  let cases = gloss_explain_verse_number_words_cases();
  function answer(c) {
    let explain = property_get(c, "explain");
    let verses = property_get(c, "verses");
    let about = gloss_explain_verse_number_words(explain, verses);
    let named = object_property_names(about);
    function pair_read(number) {
      let said = property_get(about, number);
      let untold = null_is(said);
      if (untold) {
        let dropped = list_join([number, "none"], ":");
        return dropped;
      }
      let own_is = text_empty_is(said);
      if (own_is) {
        let own = list_join([number, "own"], ":");
        return own;
      }
      let quoted = list_join([number, said], ":");
      return quoted;
    }
    let pairs = list_map(named, pair_read);
    let joined = list_join(pairs, ",");
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "about",
    "why",
    "gloss explain verse number words",
  );
  return r;
}
