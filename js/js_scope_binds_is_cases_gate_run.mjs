import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_scope_binds_is } from "./js_scope_binds_is.mjs";
import { js_scope_binds_is_cases } from "./js_scope_binds_is_cases.mjs";
import { list_first } from "./list_first.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_scope_binds_is_cases_gate_run() {
  "QA gate: asking one named scope in a written-down file whether it binds a given name gives exactly the answer the corpus says.";
  "Both walks over scopes are this question asked at every node, so the polarity of this one answer decides what either of them hands back. Turned around, they would report every scope that does NOT bind the name - which is not an empty answer but a full one, and a full answer reads like a working reading rather than a broken one.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_scope_binds_is_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let node_type = property_get(c, "node_type");
    let nodes = js_list_type_nodes(ast, node_type);
    let node = list_first(nodes);
    let asked = property_get(c, "asked");
    let binds = js_scope_binds_is(node, asked);
    return binds;
  }
  let r = cases_gate_run_generic(cases, answer, "binds", "name", "scope binds a name");
  return r;
}
