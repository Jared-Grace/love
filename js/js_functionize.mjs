import { js_functionize_local } from "./js_functionize_local.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
export async function js_functionize(
  ast,
  f_name_new,
  stack_,
  index_from,
  index_to,
) {
  let indices = [index_from, index_to];
  await js_functionize_local(stack_, indices, f_name_new, ast);
  await js_outside_move(ast);
  await js_imports_fix(ast);
}
