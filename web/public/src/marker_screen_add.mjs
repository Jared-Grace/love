import { marker_screen_add_generic } from "../../../love/public/src/marker_screen_add_generic.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_param_new_double } from "../../../love/public/src/function_param_new_double.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_property } from "../../../love/public/src/js_property.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function marker_screen_add(screen_name) {
  let result = await marker_screen_add_generic(lambda);
  marker("1");
  return result;
  async function lambda(properties, prefixed) {
    let code_string = js_code_string(screen_name);
    let key = js_parse_expression(code_string);
    let combined_screen = function_name_combine(prefixed, screen_name);
    let value = js_parse_expression(combined_screen);
    let p = js_property(key, value);
    list_add(properties, p);
    await function_new(combined_screen);
    const v = "context";
    await function_param_new_double(v);
    async function lambda2(ast) {
      let code = js_code_call_args(html_clear_context.name, [v]);
      let code_assign = js_code_let_assign("root", code);
      let statement = js_parse_statement(code_assign);
      js_declaration_single_block_body_add(ast, statement);
    }
    let output = await function_transform(combined_screen, lambda2);
  }
}
