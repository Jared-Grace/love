import { function_name_combine } from "./function_name_combine.mjs";
import { function_rename } from "./function_rename.mjs";
import { marker } from "./marker.mjs";
export async function function_rename_suffix_add(f_name_before, suffix) {
  marker("1");
  let f_name_after = function_name_combine(f_name_before, suffix);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
