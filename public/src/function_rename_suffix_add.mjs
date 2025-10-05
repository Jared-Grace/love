import { function_name_separator_padded_not_is_assert } from "../../../karate_code/public/src/function_name_separator_padded_not_is_assert.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_suffix_add(f_name_before, suffix) {
  marker("1");
  let fn = function_name_combine;
  function_name_separator_padded_not_is_assert(suffix);
  let f_name_after = function_name_combine(f_name_before, suffix);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
