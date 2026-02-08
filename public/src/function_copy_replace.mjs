import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
export async function function_copy_replace(f_name_old, from, to) {
  let f_name_new = text_replace(f_name_old, from, to);
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
