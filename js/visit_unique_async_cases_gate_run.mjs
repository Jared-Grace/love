import { equal } from "./equal.mjs";
import { cases_answers_gate_run_generic } from "./cases_answers_gate_run_generic.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { visit_unique_async_cases } from "./visit_unique_async_cases.mjs";
export async function visit_unique_async_cases_gate_run() {
  "QA gate: walking outward from one node of a written-down graph hands the lambda exactly the nodes the corpus names, in exactly that order.";
  "The order is what is really being watched. This walk hands a node over before asking what it reaches, and that is what lets it mark the node as met in time to cut a ring; the walk over a file hands a node over after its children instead, and the two are named as twins, so a reader tidying them into agreement would be turning one of them into something that never finishes on a graph that leads back to itself. Three of these cases are such graphs, and each of them would run until the machine refused another step.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = visit_unique_async_cases();
  async function answer(c) {
    let edges = property_get(c, "edges");
    let from = property_get(c, "from");
    async function children_get(node_asked) {
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
    async function on_each(v) {
      let node = property_get(v, "node");
      list_add(visited, node);
    }
    await visit_unique_async(from, children_get, on_each);
    return visited;
  }
  let answers = await list_map_async(cases, answer);
  let r = cases_answers_gate_run_generic(
    cases,
    answers,
    "visited",
    "name",
    "walk outward from a node",
  );
  return r;
}
