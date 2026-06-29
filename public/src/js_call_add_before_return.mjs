import { js_find_return_insert_statement } from "../../../love/public/src/js_find_return_insert_statement.mjs";
import { js_call_add_generic } from "../../../love/public/src/js_call_add_generic.mjs";
export async function js_call_add_before_return(ast, f_name) {
  let lambda_add = js_find_return_insert_statement;
  await js_call_add_generic(ast, f_name, lambda_add);
}
