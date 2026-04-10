import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_call_named } from "../../../love/public/src/js_call_named.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let only = js_call_named(ast, unaliased);
  let r = js_block_find(only);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  return only;
}
