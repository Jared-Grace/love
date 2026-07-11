import { function_params_get } from "../../../love/public/src/function_params_get.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { function_name_combine_multiple_concat } from "../../../love/public/src/function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "../../../love/public/src/function_curryify_specify_name.mjs";
export async function function_curryify_specify_name_get(
  unaliased,
  positions_,
) {
  let params = await function_params_get(unaliased);
  let ending = null;
  let e = lists_sizes_equal([params, positions_]);
  if (e) {
    ending = ["later"];
  } else {
    let n = function_curryify_specify_name(unaliased);
    ending = list_concat_single(n, positions_);
  }
  const parts = [unaliased];
  let combined = function_name_combine_multiple_concat(parts, ending);
  return combined;
}
