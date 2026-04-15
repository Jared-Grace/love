import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
import { function_name_combine_multiple_concat } from "../../../love/public/src/function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "../../../love/public/src/function_curryify_specify_name.mjs";
export function function_curryify_specify_name_get(unaliased, positions_1) {
  let declaration2 = js_flo(ast);
  let a = function js_declaration_param_add_curried_result(param_name) {
    let item = js_parse_expression(param_name);
    let params = js_function_declaration_params_get(declaration2);
    list_add(params, item);
  };
  each(param_names, a);
  let declaration = declaration2;
  let n = function_curryify_specify_name(unaliased);
  const parts = [n];
  let combined = function_name_combine_multiple_concat(parts, positions_1);
  return combined;
}
