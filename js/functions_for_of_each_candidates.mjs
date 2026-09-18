import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_for_of_each_candidates } from "./js_for_of_each_candidates.mjs";
export async function functions_for_of_each_candidates() {
  arguments_assert(arguments, 0);
  ("Every function in the repo holding a walking loop that could be written as a call to the repo's own walk, each named beside the words those loops walk with.");
  ("What a step that turned loops into walks would have to look at, and the most it could ever change. A function absent from here holds no such loop at all.");
  let offenders = await functions_ast_offenders_generic(
    js_for_of_each_candidates,
    "loops",
  );
  return offenders;
}
