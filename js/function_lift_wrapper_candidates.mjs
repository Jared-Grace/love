import { arguments_assert } from "./arguments_assert.mjs";
import { function_lift_candidates_generic } from "./function_lift_candidates_generic.mjs";
import { function_lift_wrapper_nested_readings } from "./function_lift_wrapper_nested_readings.mjs";
export async function function_lift_wrapper_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one whose body could be moved out with its name left behind, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The wider of the two reports. The one next door lists what the plain lift would take, which is only what is always called by name; this lists what the move that leaves the name behind would take, which is nearly everything - a callback handed to a visitor, a renderer handed to a page. Reading them together says which of the two moves to make: where both list a piece, the plain lift is the better one, because it leaves no line behind at all.");
  ("The walking, the ranking and the counting are done next door, because the report beside this one wants all three the same way. The one reading that makes this the wrapper report is the only thing handed over.");
  let ranked = await function_lift_candidates_generic(
    f_name,
    function_lift_wrapper_nested_readings,
  );
  return ranked;
}
