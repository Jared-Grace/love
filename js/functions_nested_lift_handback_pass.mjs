import { arguments_assert } from "./arguments_assert.mjs";
import { functions_nested_lift_pass_generic } from "./functions_nested_lift_pass_generic.mjs";
import { functions_lift_handback_candidates } from "./functions_lift_handback_candidates.mjs";
import { function_nested_lift_handback } from "./function_nested_lift_handback.mjs";
export async function functions_nested_lift_handback_pass() {
  arguments_assert(arguments, 0);
  ("One walk down the third work list, moving out the piece it names inside each function that has one so that it hands its writes back, each under a name worked out from the two names it has, and each committed under its own command before the next one starts.");
  ("The pair that reaches what the other two walks leave standing: a closure writing to a name it reached out for. Neither of the other moves can take one, because a name handed in as a parameter is a copy and the write would land on the copy while the line outside waiting to read it goes on reading the old value - so the other two walks run to a standstill with those closures untouched, and this is the walk for exactly them.");
  ("There is no choosing per row here, unlike the wide walk. A shape this move can take is a shape neither of the others can, so there is never a better move standing beside it.");
  ("Run it after the other two rather than instead of them. Where a closure only reads what it reached out for, the moves that hand nothing back leave a shorter line behind and free every sibling reaching for the name; this one is the answer to the shapes those refuse.");
  let r = await functions_nested_lift_pass_generic(
    functions_lift_handback_candidates,
    function_nested_lift_handback,
  );
  return r;
}
