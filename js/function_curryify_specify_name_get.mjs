import { function_params_get } from "./function_params_get.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
import { function_name_combine_multiple_concat } from "./function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "./function_curryify_specify_name.mjs";
export async function function_curryify_specify_name_get(
  unaliased,
  positions_1,
) {
  let params = await function_params_get(unaliased);
  let ending = null;
  let e = lists_sizes_equal([params, positions_1]);
  if (e) {
    ending = ["later"];
  } else {
    let n = function_curryify_specify_name(unaliased);
    ending = list_concat_single(n, positions_1);
  }
  let parts = [unaliased];
  let combined = function_name_combine_multiple_concat(parts, ending);
  return combined;
}
