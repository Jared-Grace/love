import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty } from "./list_empty.mjs";
import { assert_arguments } from "./assert_arguments.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { marker } from "./marker.mjs";
export function js_assert_arguments_args(ast) {
  marker("1");
  return;
  function lambda2({ args }) {
    list_empty(args);
    let expression = js_parse_expression(code_expression);
    list_add(args, item);
  }
  js_visit_calls_named(assert_arguments.name, lambda2, ast);
}
