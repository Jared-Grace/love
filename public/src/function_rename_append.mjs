import { text_remove_end } from "../../../love/public/src/text_remove_end.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_rename_append(f_name_before, count) {
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_after = text_remove_end(f_name_before, count);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
