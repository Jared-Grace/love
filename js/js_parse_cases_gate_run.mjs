import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_parse_cases } from "./js_parse_cases.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function js_parse_cases_gate_run() {
  "QA gate: a written-out file is read in with the statements the corpus names standing at the top of it, in order, and text that is not a file this repo could hold is stopped on.";
  "Only the top of the file is looked at, by kind. What stands further down inside each statement belongs to the readings above this one, each of which has a corpus of its own; what this one owes is that the file was accepted at all and broken into the right pieces.";
  "A stop is answered with a word rather than with an empty list, because a file holding nothing already answers with one.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_parse_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let ast = js_parse(given);
      let body = property_get(ast, "body");
      let kinds = list_map(body, js_node_type);
      return kinds;
    } catch (e) {
      let refused = "refused";
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "statements", "name", "code");
  return r;
}
