import { function_rename } from "./function_rename.mjs";
import { marker } from "./marker.mjs";
export async function function_rename_suffix_add(f_name_before, f_name_after) {
  marker("1");
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
