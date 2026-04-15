import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
import { function_name_combine_multiple_concat } from "../../../love/public/src/function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "../../../love/public/src/function_curryify_specify_name.mjs";
export function function_curryify_specify_name_get(unaliased, positions_1) {
  let declaration2 = js_flo(ast);
  let params = js_function_declaration_params_get(declaration2);
  let ending = null;
  let e = lists_sizes_equal([params, positions_1]);
  if (e) {
    ending = ["later"];
  } else {
  }
  let n = function_curryify_specify_name(unaliased);
  const parts = [n];
  let combined = function_name_combine_multiple_concat(parts, positions_1);
  return combined;
}
