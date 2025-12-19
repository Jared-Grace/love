import { list_replace_all } from "../../../love/public/src/list_replace_all.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_assert_arguments_args(ast) {
  let declaration = js_declaration_single(ast);
  let params = js_declaration_params_get(declaration);
  let size = list_size(params);
  function lambda2({ args }) {
    let code_expression = js_special_arguments();
    let args_expression = js_parse_expression(code_expression);
    let size_expression = js_parse_expression(size);
    let args_new = [args_expression, size_expression];
    list_replace_all(args, args_new);
  }
  js_visit_calls_named(assert_arguments.name, lambda2, ast);
}
