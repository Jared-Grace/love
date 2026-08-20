import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { visit } from "./visit.mjs";
import { visit_filter_cases } from "./visit_filter_cases.mjs";
export function visit_filter_cases_gate_run() {
  "QA gate: walking a written-down graph either hands over exactly the nodes the corpus names, or refuses with exactly the sentence it names.";
  "The refusals are the half that cannot be checked any other way: without the refusal these graphs have no bottom, so the case could not be answered at all - it would run until the machine stopped it, which is the very thing the refusal was added to replace. Take the refusal out and two cases here hang instead of going red, which is worth knowing before it happens.";
  "The other half watches the opposite mistake. Only being INSIDE a node is refused; meeting one a second time somewhere else is ordinary and must still be handed over, and the diamond case is the one that says so.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = visit_filter_cases();
  function answer(c) {
    let edges = property_get(c, "edges");
    let from = property_get(c, "from");
    function children_get(node_asked) {
      for (let edge of edges) {
        let node = property_get(edge, "node");
        if (equal(node, node_asked)) {
          let reaches = property_get(edge, "reaches");
          return reaches;
        }
      }
      let none = [];
      return none;
    }
    let visited = [];
    function on_each(v) {
      let node = property_get(v, "node");
      list_add(visited, node);
    }
    try {
      visit(from, children_get, on_each);
    } catch (e) {
      let r2 = e.message;
      return r2;
    }
    let made = list_join_space(visited);
    return made;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "made",
    "name",
    "plain walk over a graph",
  );
  return r;
}
