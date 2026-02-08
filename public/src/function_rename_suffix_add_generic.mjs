import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { function_name_separator_padded_not_is_assert } from "../../../love/public/src/function_name_separator_padded_not_is_assert.mjs";
export async function function_rename_suffix_add_generic(
  f_name_before,
  other,
  fn,
) {
  function_name_separator_padded_not_is_assert(other);
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_after = fn(f_name_before, other);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
