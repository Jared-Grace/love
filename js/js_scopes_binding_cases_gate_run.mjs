import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_scope_label } from "./js_scope_label.mjs";
import { js_scopes_binding } from "./js_scopes_binding.mjs";
import { js_scopes_binding_cases } from "./js_scopes_binding_cases.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_scopes_binding_cases_gate_run() {
  "QA gate: asking a written-down file which scopes under a named node bind a given name gives back exactly the scopes the corpus says.";
  "This walk and the shadowing walk ask the same question of every node and differ only in whether the answer must also be hidden, so between them they decide what a rename is offered and what it is told to leave alone. The failure this one can have on its own is dropping the node it was handed: a parameter is bound by the function and by nothing inside it, so a walk that only looked further down would report a name it can see as bound nowhere.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_scopes_binding_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let node_type = property_get(c, "node_type");
    let nodes = js_list_type_nodes(ast, node_type);
    let root = list_first(nodes);
    let asked = property_get(c, "asked");
    let scopes = js_scopes_binding(root, asked);
    let shown = list_map(scopes, js_scope_label);
    let sorted = list_sort_text(shown);
    return sorted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "scopes",
    "name",
    "scopes binding a name",
  );
  return r;
}
