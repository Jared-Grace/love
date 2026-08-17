import { arguments_assert } from "./arguments_assert.mjs";
import { functions_lift_candidates } from "./functions_lift_candidates.mjs";
import { function_nested_lift } from "./function_nested_lift.mjs";
import { functions_nested_lift_pass_generic } from "./functions_nested_lift_pass_generic.mjs";
export async function functions_nested_lift_pass() {
  arguments_assert(arguments, 0);
  ("One walk down the work list, moving out the piece it names inside each function that has one, each under a name worked out from the two names it has, and each committed under its own command before the next one starts.");
  ("The narrow pair: the list of pieces that are always called by name, and the move that takes the name away with the body. Nothing is left standing where the piece was, so every sibling that was reaching for that name stops having to be handed it, and each cut made after this one is a cheaper cut.");
  ("The walk itself lives one name along, shared with the wider pass beside it. What each of the two does differently is only which list it reads and which move it makes; the working-out of the new name, the two steppings-over, and the committing of each move under its own command were the same lines twice.");
  let r = await functions_nested_lift_pass_generic(
    functions_lift_candidates,
    function_nested_lift,
  );
  return r;
}
