import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_replace(f_name_old, from, to) {
  marker("1");
  let replaced = string_replace(s, from, to);
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
