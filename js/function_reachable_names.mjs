import { function_imports } from "./function_imports.mjs";
import { property_get } from "./property_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
export async function function_reachable_names(f_name) {
  "Every function this one can reach through its imports, however far down, itself included. Read-only.";
  "This is what a bundle built from that entry point carries, which is the reason it walks every import and turns aside at nothing. Its neighbour asks a different question and gets a different answer on purpose: the reachable-in-a-browser walk stops at any function that asks which environment it is in, because a page never travels the other branch. A bundler has no such choice - a static import is packed whether or not anything ever calls it - so a walk that stopped at a guard would hand back less than what ships.";
  "The answer is the set of things a break can reach, so it is the right thing to weigh a complaint against: a gate naming a function outside this set has named something the entry point does not carry.";
  async function children_get(visited_f_name) {
    let imports = await function_imports(visited_f_name);
    return imports;
  }
  async function lambda(add) {
    function each_visited(v) {
      let node = property_get(v, "node");
      add(node);
    }
    await visit_unique_async(f_name, children_get, each_visited);
  }
  let reachable = await list_adder_unique_async(lambda);
  return reachable;
}
