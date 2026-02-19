import { function_name_parts_swap_end } from "../../../love/public/src/function_name_parts_swap_end.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_parts_end_swap(f_name_before) {
  let f_name_after = function_name_parts_swap_end(f_name_before);
  await function_rename_open(f_name_before, f_name_after);
}
