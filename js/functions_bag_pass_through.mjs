import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_bag_pass_through } from "./js_bag_pass_through.mjs";
export async function functions_bag_pass_through() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that takes a record apart a name at a time only to put the same names straight back into another record, each one named beside the record it came from and what it carried.");
  ("These are the joins of work that was cut into steps. The cutting is right and this is its price: each step has to write out again everything the steps before it worked out, so a name added at the front of a chain is written once more in every function behind it, and adding one later means editing all of them.");
  ("It reports and asks for nothing. Handing the record over whole instead is only sound when the record holds nothing beyond what was taken out of it and nobody minds the order the names come in, and neither of those can be seen from inside the function doing the carrying. This is the list to read before deciding that about any of them.");
  let offenders = await functions_ast_offenders_generic(
    js_bag_pass_through,
    "pass_through",
  );
  return offenders;
}
