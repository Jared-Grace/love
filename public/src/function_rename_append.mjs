import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_separator_padded_not_is_assert } from "../../../love/public/src/function_name_separator_padded_not_is_assert.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function function_rename_append(f_name_before, suffix) {
  let fn = text_combine;
  function_name_separator_padded_not_is_assert(suffix);
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_after = fn(f_name_before, suffix);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
