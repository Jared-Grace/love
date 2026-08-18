import { arguments_assert } from "./arguments_assert.mjs";
import { functions_lift_candidates_generic } from "./functions_lift_candidates_generic.mjs";
import { function_lift_handback_candidates } from "./function_lift_handback_candidates.mjs";
export async function functions_lift_handback_candidates() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling that holds a closure the move handing its writes back would take, with the biggest such closure named and sized. Biggest closure first.");
  ("The third of the work lists, and the one that reaches what the other two both stop at. Measured across the oversize functions on 2026-08-18, a closure writing to a name it reached out for was fifty-nine of the sixty-seven refusals the wider list ran into, and thirty-one closures had that as their only one. So this is not the tail of the other two lists - it is most of what they were leaving behind.");
  ("Nothing is moved and nothing is written. The judgement is the one the move itself asks, so a row standing here cannot be a row the move then turns down.");
  let ranked = await functions_lift_candidates_generic(
    function_lift_handback_candidates,
  );
  return ranked;
}
