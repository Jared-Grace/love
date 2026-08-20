import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_node_name_try } from "./js_node_name_try.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_visit_types_cases } from "./js_visit_types_cases.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { text_combine_space_between } from "./text_combine_space_between.mjs";
export function js_visit_types_cases_gate_run() {
  "QA gate: the walk that stops at any of several kinds stops at exactly the things the corpus names, in exactly the order it names them, for each way of asking.";
  "The list of kinds decides which things are stopped at and nothing else. The order things arrive in belongs to the walk underneath, which hands each thing over after everything standing inside it, and the corpus says so by asking the same two kinds in both orders and expecting one answer.";
  "Asking for no kinds stops at nothing, which is the case that separates a list nothing matches from a list everything matches.";
  "Each thing stopped at is written down with its kind in front of its name, since a call and the name of what it calls share a name.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_visit_types_cases();
  function described(node) {
    let kind = js_node_type(node);
    let named = js_node_name_try(node);
    let unnamed = null_is(named);
    if (unnamed) {
      return kind;
    }
    let both = text_combine_space_between(kind, named);
    return both;
  }
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let types = property_get(c, "types");
    let met = [];
    function lambda(v) {
      let node = property_get(v, "node");
      let description = described(node);
      list_add(met, description);
    }
    js_visit_types(ast, types, lambda);
    return met;
  }
  let r = cases_gate_run_generic(cases, answer, "met", "name", "kinds asked");
  return r;
}
