import { function_name_parts_transform } from "../../../love/public/src/function_name_parts_transform.mjs";
import { list_swap_end } from "../../../love/public/src/list_swap_end.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function function_rename_parts_swap(f_name_before) {
  function lambda(parts) {
    list_swap_end(parts);
  }
  let f_name_after = function_name_parts_transform(f_name_before, lambda);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
