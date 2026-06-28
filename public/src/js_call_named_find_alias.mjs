import { js_call_named_find } from "../../../love/public/src/js_call_named_find.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function js_call_named_find_alias(f_name, ast) {
  let unaliased = await function_name_unalias_only(f_name);
  let only = js_call_named_find(ast, unaliased);
  return only;
}
