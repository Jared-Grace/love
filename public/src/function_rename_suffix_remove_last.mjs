import { function_rename_suffix_remove } from "../../../love/public/src/function_rename_suffix_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_suffix_remove_last(
  f_name_before,
  suffix,
) {
  marker("1");
  return await function_rename_suffix_remove(f_name_before, suffix);
}
