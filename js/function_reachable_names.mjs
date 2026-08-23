import { function_reachable_names_stopping } from "./function_reachable_names_stopping.mjs";
export async function function_reachable_names(f_name) {
  "Every function this one can reach through its imports, however far down, itself included. Read-only.";
  "This is what a bundle built from that entry point carries, which is the reason it walks every import and turns aside at nothing. Its neighbour asks a different question and gets a different answer on purpose: the reachable-in-a-browser walk stops at any function that asks which environment it is in, because a page never travels the other branch. A bundler has no such choice - a static import is packed whether or not anything ever calls it - so a walk that stopped at a guard would hand back less than what ships.";
  "The answer is the set of things a break can reach, so it is the right thing to weigh a complaint against: a gate naming a function outside this set has named something the entry point does not carry.";
  "THE WALK ITSELF LIVES NEXT DOOR, IN THE ONE THAT CAN BE TOLD WHERE TO STOP, and this asks it with nothing to stop at. That way round rather than the other because turning-aside is the addition and packing-everything is the meaning here: written the other way, this name would be the walk and its stopping neighbour a wrapper that quietly makes the answer smaller than the thing this name is read as promising.";
  let nothing_stopped = [];
  let reachable = await function_reachable_names_stopping(
    f_name,
    nothing_stopped,
  );
  return reachable;
}
