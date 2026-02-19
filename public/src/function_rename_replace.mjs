import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_replace(f_name_before, from, to) {
  text_is_assert(from);
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_after = text_replace(f_name_before, from, to);
  let v = await function_rename_open(f_name_before, f_name_after);
  return v;
}
