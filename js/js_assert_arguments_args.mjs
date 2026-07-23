import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { list_replace_all } from "./list_replace_all.mjs";
import { list_size } from "./list_size.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
export function js_assert_arguments_args(ast) {
  let params = js_flo_params_get(ast);
  let size = list_size(params);
  function lambda({ args }) {
    let code_expression = js_special_arguments();
    let args_expression = js_parse_expression(code_expression);
    let size_expression = js_parse_expression(size);
    let args_new = [args_expression, size_expression];
    list_replace_all(args, args_new);
  }
  js_visit_calls_named(ast, arguments_assert.name, lambda);
}
