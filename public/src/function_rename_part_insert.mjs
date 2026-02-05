import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_part_insert(f_name_before, f_name_after) {
  marker("1");
  return await function_rename(f_name_before, f_name_after);
}
