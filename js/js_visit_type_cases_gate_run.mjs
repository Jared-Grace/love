import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_node_name_try } from "./js_node_name_try.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { null_is } from "./null_is.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit_type_cases } from "./js_visit_type_cases.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_visit_type_cases_gate_run() {
  "QA gate: the walk that stops only at one kind of thing stops at exactly the things the corpus names, in exactly the order it names them.";
  "The order is the point. Each thing is handed over after everything standing inside it, so a call written inside another arrives first, and anything gathered on the way down is complete by the time the thing holding it arrives. A walk rewritten to hand things over on the way down would still stop at the same things, so only an order can catch it.";
  "The walk hands over a record of where it is rather than the thing itself, and the thing is reached out of that record here.";
  "Each thing stopped at is named by the two small readings that name things, so a list of names comes back rather than a list of one kind repeated.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_visit_type_cases();
  function named_get(node) {
    let named = js_node_name_try(node);
    let unnamed = null_is(named);
    if (unnamed) {
      let kind = js_node_type(node);
      return kind;
    }
    return named;
  }
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let type = property_get(c, "type");
    let met = [];
    function lambda(v) {
      let node = property_get(v, "node");
      let named = named_get(node);
      list_add(met, named);
    }
    js_visit_type(ast, type, lambda);
    return met;
  }
  let r = cases_gate_run_generic(cases, answer, "met", "name", "code");
  return r;
}
