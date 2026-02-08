import { function_name_parts_swap_end } from "../../../love/public/src/function_name_parts_swap_end.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function function_rename_parts_swap(f_name_before) {
  let f_name_after = function_name_parts_swap_end(f_name_before);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
