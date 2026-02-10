import { function_wrap_replace } from "../../../love/public/src/function_wrap_replace.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
export async function function_wrap_replace_last(f_name_before, suffix) {
  let from = function_name_to_part_last(f_name_before);
  let r = await function_wrap_replace(f_name_before, from, suffix);
  return r;
}
