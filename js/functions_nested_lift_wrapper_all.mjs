import { arguments_assert } from "./arguments_assert.mjs";
import { functions_nested_lift_wrapper_pass } from "./functions_nested_lift_wrapper_pass.mjs";
import { functions_lift_wrapper_candidates } from "./functions_lift_wrapper_candidates.mjs";
import { functions_nested_lift_all_generic } from "./functions_nested_lift_all_generic.mjs";
export async function functions_nested_lift_wrapper_all() {
  arguments_assert(arguments, 0);
  ("Moves out every function written inside another one that the wider work list can name, by whichever of the two moves each piece will go by, walking again and again until a whole walk moves nothing, and committing each move under its own command as it lands.");
  ("The one to run. It reaches everything the narrow run reaches, because where a piece is always called by name the choosing picks the narrow move, and it also reaches the shape the narrow run cannot see at all - a piece handed on as a value. Measured on 2026-08-17, the narrow list had nothing to say about the biggest lesson on the size record, whose thirty-one line piece was handed to a mapper.");
  ("What is left when it stops is the answer worth reading. Those functions are long because they hold a straight run of work rather than a closure, so they want the span cut instead, and a name still standing here after this has run is a name somebody has to read.");
  let r = await functions_nested_lift_all_generic(
    functions_nested_lift_wrapper_pass,
    functions_lift_wrapper_candidates,
  );
  return r;
}
