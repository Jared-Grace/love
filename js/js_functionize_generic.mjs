import { arguments_assert } from "./arguments_assert.mjs";
import { js_functionize_local_generic } from "./js_functionize_local_generic.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
export async function js_functionize_generic(
  ast,
  f_name_new,
  stack_,
  index_from,
  index_to,
  returning,
) {
  arguments_assert(arguments, 6);
  ("Cut a run of lines out into a function of its own, move that function out to where the module's own functions live, and mend the imports both sides now need.");
  ("Whether the run closes the function it is coming out of is the caller's to say, and it is the only thing the two ways of asking ever differ about.");
  let indices = [index_from, index_to];
  await js_functionize_local_generic(
    stack_,
    indices,
    f_name_new,
    ast,
    returning,
  );
  await js_outside_move(ast);
  await js_imports_fix(ast);
}
