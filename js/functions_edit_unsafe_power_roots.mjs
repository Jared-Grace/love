import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { functions_flow_reads } from "./functions_flow_reads.mjs";
import { functions_edit_unsafe_from_reads } from "./functions_edit_unsafe_from_reads.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
export async function functions_edit_unsafe_power_roots() {
  "Every function the edit check thinks may hand out a power of its own - not by handing back another's - each with how many functions count as handing back a power only because of it, most first. A root that reads a record by a key it never proved, rather than one reaching the machine, is where a false alarm is cheapest to fix.";
  "Found by walking each function that counts as handing back a power down to where that power starts, so a root is counted once for every function standing on it; the head of the list is the one fix that clears the most refusals.";
  let reads = await functions_flow_reads();
  let world = functions_edit_unsafe_from_reads(reads);
  let key_power = js_flow_key_power_name();
  let from = new Map();
  for (let name of world.capable) {
    let read = reads.get(name);
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
    let v = returned.filter(lambda2);
    from.set(name, v);
  }
  let counts = new Map();
  for (let name of world.capable) {
    let seen = new Set();
    let current = name;
    while (not(seen.has(current))) {
      seen.add(current);
      function lambda3(c) {
        let r4 = not_equal(c, key_power) && not(seen.has(c));
        return r4;
      }
      let next = (from.get(current) ?? []).find(lambda3);
      if (equal(next, undefined)) {
        break;
      }
      current = next;
    }
    counts.set(current, (counts.get(current) ?? 0) + 1);
  }
  function lambda4([name, standing]) {
    let read = reads.get(name);
    let r5 = {
      name,
      standing,
      key: (from.get(name) ?? []).includes(key_power),
      machine: greater_than(read.machine.length, 0),
      reflect: greater_than(read.reflect.length, 0),
    };
    return r5;
  }
  let roots = [...counts].map(lambda4);
  function lambda5(a, b) {
    let difference = subtract(b.standing, a.standing);
    return difference;
  }
  roots.sort(lambda5);
  return roots;
}
