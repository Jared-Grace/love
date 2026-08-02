import { js_indexeddb_name_literals_cases } from "./js_indexeddb_name_literals_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_indexeddb_name_literals } from "./js_indexeddb_name_literals.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_indexeddb_name_literals_cases_gate_run() {
  "QA gate: each written-down file yields exactly the names of kept things the corpus says it does.";
  "Nothing else can tell a working reading apart from a silent one. The gate built on this reading passes by finding nothing, so a reading that had stopped answering would leave a green gate over a repo naming its stores in passing - and once a name is reworded, everything a person kept under the old one is out of reach.";
  "Only the word is compared, not the call it was found at, which is carried out so a failure can say where to look.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_indexeddb_name_literals_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let doors = property_get(c, "doors");
    let sites = js_indexeddb_name_literals(ast, doors);
    let words = list_map_property(sites, "word");
    return words;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "words",
    "why",
    "indexeddb name literals",
  );
  return r;
}
