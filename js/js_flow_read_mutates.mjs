import { greater_than } from "./greater_than.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
export function js_flow_read_mutates(read, mutating, returns_alias) {
  "Whether the function js_function_flow_read gave back this reading for may change something it is handed, given the set of functions already known to. True when a thing it changes in place, or a thing it hands to one of those functions, could be the very thing a parameter holds.";
  "Holding is followed, not working out: a yes or no computed from a parameter is not the parameter, so changing it changes nothing handed in. Returns_alias is the set of functions that may hand back what they were handed.";
  let roots = [...read.mutations];
  for (let call of read.calls) {
    if (mutating.has(call.callee)) {
      for (let a of call.args) {
        roots.push(a.alias);
      }
    }
  }
  let s = js_flow_alias_slice(read, roots, returns_alias, mutating);
  let mutates = greater_than(s.params.length, 0);
  return mutates;
}
