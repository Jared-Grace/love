import { string_padded_is } from "./string_padded_is.mjs";
import { assert_not } from "./assert_not.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_rename } from "./function_rename.mjs";
import { marker } from "./marker.mjs";
export async function function_rename_suffix_add(f_name_before, suffix) {
  marker("1");
  let s = suffix;
  let padding = "_";
  let p = string_padded_is(s, padding);
  assert_not(p);
  let f_name_after = function_name_combine(f_name_before, suffix);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
