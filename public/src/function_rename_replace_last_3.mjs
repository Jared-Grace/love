import { function_name_to_parts_last_3 } from "../../../love/public/src/function_name_to_parts_last_3.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
export async function function_rename_replace_last_3(f_name_before, to) {
  let from = function_name_to_parts_last_3(f_name_before);
  let v = await function_rename_replace(f_name_before, from, to);
  return v;
}
