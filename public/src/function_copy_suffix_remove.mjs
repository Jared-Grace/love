import { function_name_suffix_remove } from "../../../love/public/src/function_name_suffix_remove.mjs";
export async function function_copy_suffix_remove(f_name_before, suffix) {
  let v = await function_copy_suffix_add_generic(
    f_name_before,
    suffix,
    function_name_suffix_remove,
  );
  return v;
}
