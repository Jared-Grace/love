import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_hash_object_word_calls_unknown } from "./js_hash_object_word_calls_unknown.mjs";
import { js_hash_object_word_calls_unknown_cases } from "./js_hash_object_word_calls_unknown_cases.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_hash_object_word_calls_unknown_cases_gate_run() {
  "QA gate: each written-down file yields exactly the words the corpus says it writes into a page address through a call the walk cannot read.";
  "The gate built on this reading passes by finding nothing, and what it is watching for is the one fault this repo cannot repair afterwards - a word already sitting in a saved link. So a reading that had quietly stopped answering would leave that gate green over exactly the repo it was written to catch, and only a written-down offender can tell the two apart.";
  "Only the word is compared, not the call it was found at. The call is carried out so a failure can say where to look, and a corpus spelling it at every case would be paying in reading for something no case turns on.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_hash_object_word_calls_unknown_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let sites = js_hash_object_word_calls_unknown(ast);
    let words = list_map_property(sites, "word");
    return words;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "words",
    "why",
    "hash object word calls unknown",
  );
  return r;
}
