import { js_call_named_find } from "./js_call_named_find.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
export async function js_call_named_find_alias(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let only = js_call_named_find(ast, unaliased);
  return only;
}
