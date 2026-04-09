import { js_visit_call_named } from "../../../love/public/src/js_visit_call_named.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let only = js_visit_call_named(ast, unaliased);
  return only;
}
