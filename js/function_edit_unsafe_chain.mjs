import { greater_than } from "./greater_than.mjs";
import { functions_flow_reads } from "./functions_flow_reads.mjs";
import { functions_edit_unsafe_from_reads } from "./functions_edit_unsafe_from_reads.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
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
    ("The next step is the function the reason names, never another word of it that a function happens to answer to: the reasons are sentences, and or, not and read are words in them and also names of functions here. Taking any other word once the named one was already shown is how a chain that loops back on itself went on to blame or. A function named in a sentence carries an underscore and the plain words do not, so those are asked first; a loop then ends the chain where it closes.");
    let words = String(reason).split(/[^a-z0-9_]+/);
    function lambda(w) {
      let r = reads.has(w);
      return r;
    }
    let named = words.filter(lambda);
    function lambda2(w) {
      let r = w.includes("_");
      return r;
    }
    let joined = named.filter(lambda2);
    let next = (greater_than(joined.length, 0) ? joined : named).pop();
    if (equal(next, undefined)) {
      break;
    }
    current = next;
  }
  return chain;
}
