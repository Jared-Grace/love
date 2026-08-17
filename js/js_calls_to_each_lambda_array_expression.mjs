import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_get } from "./property_get.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_code_brackets_empty } from "./js_code_brackets_empty.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function js_calls_to_each_lambda_array_expression(ast, async_is) {
  arguments_assert(arguments, 2);
  let f_name_call = fn_name("each_async");
  let r = await js_call_new(f_name_call, ast);
  let expression = property_path_get_2(r, "parsed", "expression");
  if (async_is) {
    expression = property_get(expression, "argument");
  }
  js_call_arguments_get(expression);
  let code = js_code_brackets_empty();
  let array_expression = js_parse_expression(code);
  return array_expression;
}
