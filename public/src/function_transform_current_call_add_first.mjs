import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { js_call_fill_inner } from "../../../love/public/src/js_call_fill_inner.mjs";
import { data_functions_get } from "../../../love/public/src/data_functions_get.mjs";
import { js_flo_body_add_first } from "../../../love/public/src/js_flo_body_add_first.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_call_add_first(code_argument) {
  let functions = await data_functions_get();
  let visited = [];
  async function lambda(ast) {
    let expression = js_parse_expression(code_argument);
    js_flo_body_add_first(ast, expression);
    let visitor = js_node_to_visitor(ast, expression);
    await js_call_fill_inner(ast, visitor, functions, visited);
  }
  let r = await function_transform_current_fn(lambda);
  return r;
}
