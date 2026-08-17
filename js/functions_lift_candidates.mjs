import { arguments_assert } from "./arguments_assert.mjs";
import { function_lift_candidates } from "./function_lift_candidates.mjs";
import { functions_lift_candidates_generic } from "./functions_lift_candidates_generic.mjs";
export async function functions_lift_candidates() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling that holds a closure the lift would actually move, with the biggest such closure named and sized. Biggest closure first.");
  ("The work list the size record could not be. The record says which functions are too long; the nesting report says how much of that length is folded inside something; this says which name to hand the lift, so a row here is already a command rather than a reading to act on later.");
  ("The walk itself lives one name along, shared with the wider list beside it. The two differ in nothing but which reading of one function they ask for, and everything else - which functions to ask about, what to do with one that cannot be read, which answer to keep, the ordering - was the same lines twice over.");
  let ranked = await functions_lift_candidates_generic(
    function_lift_candidates,
  );
  return ranked;
}
