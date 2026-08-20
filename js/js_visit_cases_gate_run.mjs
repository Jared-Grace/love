import { property_js_parse } from "./property_js_parse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_cases } from "./js_visit_cases.mjs";
import { list_add } from "./list_add.mjs";
import { list_is } from "./list_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function js_visit_cases_gate_run() {
  "QA gate: walking a written-down file hands the lambda exactly the things the corpus names, in exactly that order, at exactly those depths.";
  "This is the walk every other reading in this family is built on, so its order is not an implementation detail of one function - it is the thing several corpora quietly assume. Those corpora are each written so their file holds one node of the kind they ask about, which is what lets them name an answer without naming a position; that dodge is only safe while the walk keeps handing things over in one settled order.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_visit_cases();
  function kind_of(thing) {
    if (list_is(thing)) {
      let size = list_size(thing);
      let counted = list_join_space(["list", size]);
      return counted;
    }
    let type = js_node_type(thing);
    return type;
  }
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let visited = [];
    function on_each(v) {
      let node = property_get(v, "node");
      let stack = property_get(v, "stack");
      let kind = kind_of(node);
      let depth = list_size(stack);
      let step = list_join_space([kind, "at", depth]);
      list_add(visited, step);
    }
    js_visit(ast, on_each);
    return visited;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "visited",
    "name",
    "walk over a file",
  );
  return r;
}
