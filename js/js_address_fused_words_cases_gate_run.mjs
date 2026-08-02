import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_address_fused_words_cases } from "./js_address_fused_words_cases.mjs";
import { js_address_fused_words } from "./js_address_fused_words.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_address_fused_words_cases_gate_run() {
  "QA gate: each written-down file yields exactly the joined-up addresses the corpus says it does.";
  "The gate built on this reading passes by finding nothing, and so does a reading that has stopped answering. Without the corpus, a repo spelling frozen words back into its links by hand would look exactly like a repo that never does.";
  "Only the joined-up string is compared, not the word that matched it. The word is carried out so a failure can say which frozen name is at stake, and a corpus repeating it at every case would be paying in reading for something no case turns on.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_address_fused_words_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let words = property_get(c, "words");
    let sites = js_address_fused_words(ast, words);
    let texts = list_map_property(sites, "text");
    return texts;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "fused",
    "why",
    "address fused words",
  );
  return r;
}
