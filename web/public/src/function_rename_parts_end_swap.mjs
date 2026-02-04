import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_parts_end_swap(
  f_name_before,
  f_name_after,
) {
  marker("1");
  let parts = function_name_to_parts(f_name);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
