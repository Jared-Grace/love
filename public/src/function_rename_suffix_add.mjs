import { string_padded_not_is_assert } from "../../../karate_code/public/src/string_padded_not_is_assert.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_suffix_add(f_name_before, suffix) {
  marker("1");
  let padding = function_name_separator();
  string_padded_not_is_assert(suffix, padding);
  let f_name_after = function_name_combine(f_name_before, suffix);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
