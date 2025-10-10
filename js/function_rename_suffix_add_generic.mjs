import { marker } from "../../../love/public/src/marker.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { function_name_separator_padded_not_is_assert } from "../../../love/public/src/function_name_separator_padded_not_is_assert.mjs";
export async function function_rename_suffix_add_generic(
  other,
  fn,
  f_name_before,
) {
  marker("1");
  function_name_separator_padded_not_is_assert(other);
  let f_name_after = fn(f_name_before, other);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
