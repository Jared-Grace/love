import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_keyword_arguments } from "./js_keyword_arguments.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty } from "./list_empty.mjs";
import { assert_arguments } from "./assert_arguments.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { marker } from "./marker.mjs";
export function js_assert_arguments_args(ast) {
  marker("1");
  return;
  let declaration = js_declaration_single(ast);
  let params = js_declaration_params_get(declaration);
  function lambda2({ args }) {
    list_empty(args);
    let code_expression = js_keyword_arguments();
    let expression = js_parse_expression(code_expression);
    list_add(args, expression);
  }
  js_visit_calls_named(assert_arguments.name, lambda2, ast);
}
