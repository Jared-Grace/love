import { string_padded_is } from "../../../love/public/src/string_padded_is.mjs";
import { assert_not } from "../../../love/public/src/assert_not.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_suffix_add(f_name_before, suffix) {
  marker("1");
  let p = string_padded_is(suffix, "_");
  assert_not(p);
  let f_name_after = function_name_combine(f_name_before, suffix);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
