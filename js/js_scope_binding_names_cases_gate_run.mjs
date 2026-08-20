import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_scope_binding_names } from "./js_scope_binding_names.mjs";
import { js_scope_binding_names_cases } from "./js_scope_binding_names_cases.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_scope_binding_names_cases_gate_run() {
  "QA gate: each written-down file's one named scope binds exactly the names the corpus says it does.";
  "The shadowing readings ask this of every scope and call a name hidden when an inner answer meets an outer one. A binding this reading stops reporting is therefore a hiding that stops being reported, and the rename that would have moved it never happens - which is the failure that costs something, because from that line down one name quietly means two things.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_scope_binding_names_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let node_type = property_get(c, "node_type");
    let nodes = js_list_type_nodes(ast, node_type);
    let node = list_first(nodes);
    let names = js_scope_binding_names(node);
    let sorted = list_sort_text(names);
    return sorted;
  }
  let r = cases_gate_run_generic(cases, answer, "binds", "name", "scope binds");
  return r;
}
