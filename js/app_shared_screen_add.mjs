import { app_shared_screen_add_generic } from "./app_shared_screen_add_generic.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { js_flo_body_add } from "./js_flo_body_add.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_param_new_double } from "./function_param_new_double.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export async function app_shared_screen_add(a_name, screen_name) {
  let result = await app_shared_screen_add_generic(a_name, lambda);
  return result;
  async function lambda(properties, prefixed) {
    let combined_screen = function_name_combine(prefixed, screen_name);
    let value = js_parse_expression(combined_screen);
    list_add(properties, value);
    await function_new_open(combined_screen);
    let v = "context";
    await function_param_new_double(combined_screen, v);
    async function lambda2(ast) {
      let code = js_code_call_args(html_clear_context.name, [v]);
      let code_assign = js_code_let_assign("root", code);
      let statement = js_parse_statement(code_assign);
      js_flo_body_add(ast, statement);
    }
    let output = await function_transform(combined_screen, lambda2);
  }
}
