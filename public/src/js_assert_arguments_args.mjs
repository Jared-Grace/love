import { list_replace_all } from "./list_replace_all.mjs";
import { list_size } from "./list_size.mjs";
import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_keyword_arguments } from "./js_keyword_arguments.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { assert_arguments } from "./assert_arguments.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
export function js_assert_arguments_args(ast) {
  let declaration = js_declaration_single(ast);
  let params = js_declaration_params_get(declaration);
  let size = list_size(params);
  function lambda2({ args }) {
    let code_expression = js_keyword_arguments();
    let expression = js_parse_expression(code_expression);
    let args_new = [expression, size];
    list_replace_all(args, args_new);
  }
  js_visit_calls_named(assert_arguments.name, lambda2, ast);
}
