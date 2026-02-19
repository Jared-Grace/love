import { text_remove_end } from "../../../love/public/src/text_remove_end.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_rename_delete_end(f_name_before, count) {
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_after = text_remove_end(f_name_before, count);
  let v = await function_rename_open(f_name_before, f_name_after);
  return v;
}
