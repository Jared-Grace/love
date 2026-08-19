import { arguments_assert } from "./arguments_assert.mjs";
import { function_lift_candidates_generic } from "./function_lift_candidates_generic.mjs";
import { function_lift_handback_nested_readings } from "./function_lift_handback_nested_readings.mjs";
export async function function_lift_handback_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one whose body could be moved out to hand its writes back, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The third of the reports, and the one to read where the other two both come back nearly empty. They stop at a piece writing to a name it reached out for, which is most of what a walk of the long functions here runs into, and this is the list of exactly those.");
  ("The walking, the ranking and the counting are done next door, because the report beside this one wants all three the same way. The one reading that makes this the handback report is the only thing handed over.");
  let ranked = await function_lift_candidates_generic(
    f_name,
    function_lift_handback_nested_readings,
  );
  return ranked;
}
