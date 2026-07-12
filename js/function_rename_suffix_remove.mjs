import { function_name_suffix_remove } from "./function_name_suffix_remove.mjs";
import { function_rename_suffix_add_generic } from "./function_rename_suffix_add_generic.mjs";
export async function function_rename_suffix_remove(f_name_before, suffix) {
  let v = await function_rename_suffix_add_generic(
    f_name_before,
    suffix,
    function_name_suffix_remove,
  );
  return v;
}
