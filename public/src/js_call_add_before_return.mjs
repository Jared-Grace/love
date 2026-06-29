import { js_find_return_insert_statement } from "../../../love/public/src/js_find_return_insert_statement.mjs";
import { js_call_add_generic } from "../../../love/public/src/js_call_add_generic.mjs";
export async function js_call_add_before_return(ast, f_name) {
  await js_call_add_generic(ast, f_name, js_find_return_insert_statement);
}
