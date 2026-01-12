import { function_name_parts_remove } from "../../../love/public/src/function_name_parts_remove.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
export async function function_copy_remove_last(f_name_before) {
  let f_name_new = function_name_parts_remove(f_name_old, removals);
  let v = await function_copy(
    f_name_before,
    f_name_before + separator + "" + suffix,
  );
  return v;
}
