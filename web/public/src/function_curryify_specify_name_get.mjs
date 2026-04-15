import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { js_flo_params_get } from "../../../love/public/src/js_flo_params_get.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { function_name_combine_multiple_concat } from "../../../love/public/src/function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "../../../love/public/src/function_curryify_specify_name.mjs";
export async function function_curryify_specify_name_get(
  unaliased,
  positions_1,
) {
  let ast = await function_ast(unaliased);
  let params = js_flo_params_get(ast);
  let ending = null;
  let e = lists_sizes_equal([params, positions_1]);
  if (e) {
    ending = [unaliased, "later"];
  } else {
    let n = function_curryify_specify_name(unaliased);
    ending = positions_1;
    ending = list_concat(n, positions_1);
  }
  const parts = [unaliased];
  let combined = function_name_combine_multiple_concat(parts, ending);
  return combined;
}
