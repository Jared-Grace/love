import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_replace(f_name_before, from, to) {
  marker("1");
  let f_name_after = string_replace(f_name_before, from, to);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
