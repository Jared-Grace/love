import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_call_add_generic } from "./js_selects_call_add_generic.mjs";
export async function js_selects_call_add_after(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Lands the new call on the line under the chosen statement.");
  let index_delta = 1;
  await js_selects_call_add_generic(ast, selects, f_name, index_delta);
}
