import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { functions_flow_reads } from "./functions_flow_reads.mjs";
import { functions_edit_unsafe_from_reads } from "./functions_edit_unsafe_from_reads.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
export async function function_edit_unsafe_power_root(f_name) {
  "Where the power the edit check thinks this function may hand back comes from: each step is a function it hands back from that counts as handing one back, followed down until a function reaches the machine or the language's machinery itself, or reads a record by a key it did not prove.";
  "One step at a time was a loop of the same question, each answer recomputing every function's flow again. The last step is what decides it: that one function is where a false alarm is fixed, and every function above it stops being refused with it.";
  let reads = await functions_flow_reads();
  let world = functions_edit_unsafe_from_reads(reads);
  let key_power = js_flow_key_power_name();
  let chain = [];
  let seen = new Set();
  let current = f_name;
  while (world.capable.has(current) && not(seen.has(current))) {
    seen.add(current);
    let read = reads.get(current);
    function lambda(r) {
      let r2 = r.alias;
      return r2;
    }
    let starts = read.returns.map(lambda);
    let returned = js_flow_alias_slice(
      read,
      starts,
      world.returns_alias,
      world.mutating,
    ).callees;
    function lambda2(c) {
      let r3 = equal(c, key_power) || world.capable.has(c);
      return r3;
    }
    let capable = returned.filter(lambda2);
    chain.push({
      name: current,
      machine: read.machine,
      reflect: read.reflect,
      from: capable,
    });
    function lambda3(c) {
      let r4 = not_equal(c, key_power) && not(seen.has(c));
      return r4;
    }
    let next = capable.find(lambda3);
    if (equal(next, undefined)) {
      break;
    }
    current = next;
  }
  return chain;
}
