import { js_function_declaration_params_add } from "../../../love/public/src/js_function_declaration_params_add.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
import { function_name_combine_multiple_concat } from "../../../love/public/src/function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "../../../love/public/src/function_curryify_specify_name.mjs";
export function function_curryify_specify_name_get(unaliased, positions_1) {
  let declaration2 = js_flo(ast);
  js_function_declaration_params_add(declaration2, param_names);
  let declaration = declaration2;
  let n = function_curryify_specify_name(unaliased);
  const parts = [n];
  let combined = function_name_combine_multiple_concat(parts, positions_1);
  return combined;
}
