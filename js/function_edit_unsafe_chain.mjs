import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { functions_flow_reads } from "./functions_flow_reads.mjs";
import { functions_edit_unsafe_from_reads } from "./functions_edit_unsafe_from_reads.mjs";
export async function function_edit_unsafe_chain(f_name) {
  "Why this function is not safe to edit, followed down to the root: each step names the next function its reason points at, until a reason names none.";
  "A refusal from the safe overwrite names only the first step, which is usually another app function; the danger that actually decides it sits at the end of the chain, so that is what has to be read before arguing with the rule.";
  let reads = await functions_flow_reads();
  let world = functions_edit_unsafe_from_reads(reads);
  let chain = [];
  let seen = new Set();
  let current = f_name;
  while (world.unsafe.has(current) && not(seen.has(current))) {
    seen.add(current);
    let reason = world.unsafe.get(current);
    chain.push({
      name: current,
      reason,
    });
    let words = String(reason).split(/[^a-z0-9_]+/);
    function lambda(w) {
      let r = reads.has(w) && not(seen.has(w));
      return r;
    }
    let next = words.filter(lambda).pop();
    if (equal(next, undefined)) {
      break;
    }
    current = next;
  }
  return chain;
}
