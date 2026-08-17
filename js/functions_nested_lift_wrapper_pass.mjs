import { arguments_assert } from "./arguments_assert.mjs";
import { functions_lift_wrapper_candidates } from "./functions_lift_wrapper_candidates.mjs";
import { function_nested_lift_or_wrapper_run } from "./function_nested_lift_or_wrapper_run.mjs";
import { functions_nested_lift_pass_generic } from "./functions_nested_lift_pass_generic.mjs";
export async function functions_nested_lift_wrapper_pass() {
  arguments_assert(arguments, 0);
  ("One walk down the wider work list, moving out the piece it names inside each function that has one by whichever of the two moves that piece will go by, each under a name worked out from the two names it has, and each committed under its own command before the next one starts.");
  ("The wide pair: the list that also names pieces handed on as values, and the move that takes the name away where it can and leaves it behind where it cannot. That is nearly every closure there is, which is where most of a long function's length in this repo actually sits - a callback given to a mapper, a renderer given to a page.");
  ("It does not step over what the narrow pass would have taken. Where a piece is always called by name the choosing picks the narrow move, so running this instead of the narrow one loses nothing and reaches further.");
  ("What it costs is a line left behind on each piece it could only take the wider way, and one more thing to hand each sibling that still reaches for the name. That is the price of reaching a shape the narrow move refuses outright, and it is paid per piece rather than per function.");
  let r = await functions_nested_lift_pass_generic(
    functions_lift_wrapper_candidates,
    function_nested_lift_or_wrapper_run,
  );
  return r;
}
