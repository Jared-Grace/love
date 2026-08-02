import { property_js_parse } from "./property_js_parse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_hash_key_literals_cases } from "./js_hash_key_literals_cases.mjs";
import { js_hash_key_literals } from "./js_hash_key_literals.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_hash_key_literals_cases_gate_run() {
  "QA gate: each written-down file yields exactly the published words the corpus says it does.";
  "Nothing else can tell a working reading apart from a silent one. The gate built on this reading passes by finding nothing, so a reading that had stopped answering would leave a green gate over a repo writing words straight into people's saved links - and the repair for those is unreachable once the link is on somebody else's disk.";
  "Only the word is compared, not the call it was found at. The call is carried out so a failure can say where to look, and a corpus spelling it at every case would be paying in reading for something no case turns on.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_hash_key_literals_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let sites = js_hash_key_literals(ast);
    let words = list_map_property(sites, "word");
    return words;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "words",
    "why",
    "hash key literals",
  );
  return r;
}
