import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { js_call_fill_inner } from "../../../love/public/src/js_call_fill_inner.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { data_functions_get } from "../../../love/public/src/data_functions_get.mjs";
export async function js_call_add_generic(ast, f_name, lambda_add) {
  let functions = await data_functions_get();
  let visited = [];
  let unaliased = await function_name_unalias_only(name);
  let statement = js_parse_statement(f_name);
  lambda_add(ast, statement);
  let visitor = js_node_to_visitor(ast, statement);
  await js_call_fill_inner(ast, visitor, functions, visited);
}
