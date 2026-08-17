import { arguments_assert } from "./arguments_assert.mjs";
import { functions_nested_lift_pass } from "./functions_nested_lift_pass.mjs";
import { functions_lift_candidates } from "./functions_lift_candidates.mjs";
import { functions_nested_lift_all_generic } from "./functions_nested_lift_all_generic.mjs";
export async function functions_nested_lift_all() {
  arguments_assert(arguments, 0);
  ("Moves out every function written inside another one that the narrow work list can name, walking the list again and again until a whole walk moves nothing, and committing each move under its own command as it lands.");
  ("The narrow pair walked to a standstill: only pieces that are always called by name, and the move that takes the name away with the body. The wider run beside it reaches everything this one does and more, so this stays for a reader who wants only the moves that leave nothing behind.");
  ("The walking to a standstill lives one name along, shared with the wider run. The two differ in nothing but which pass they walk and which list they ask at the end.");
  let r = await functions_nested_lift_all_generic(
    functions_nested_lift_pass,
    functions_lift_candidates,
  );
  return r;
}
