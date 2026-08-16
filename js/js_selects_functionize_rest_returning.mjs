import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_functionize_rest_returning_local } from "./js_selects_functionize_rest_returning_local.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
export async function js_selects_functionize_rest_returning(
  ast,
  selects,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Pulls everything from the chosen statement through the last line of the function out into a function of its own, carrying its returns with it, gives it a file of its own, and mends the imports both sides now need.");
  ("The twin of the plain rest cutter, for the shape it refuses: a function that ends in a run of decisions, each one answering and returning. That is one of the commonest long bodies here, and the plain cutter turns every one of them away because a return that moved into a called function would return from there and let the caller carry on. Returning the call is what makes the move exact.");
  ("The thinking half is next door, where it can be shown in a sandbox. This one adds the moving out and the mending, which write into the repo's own folder.");
  await js_selects_functionize_rest_returning_local(ast, selects, f_name_new);
  await js_outside_move(ast);
  await js_imports_fix(ast);
}
