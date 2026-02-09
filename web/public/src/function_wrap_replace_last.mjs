import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_replace_last(f_name_before, suffix) {
  let from = function_name_to_part_last(f_name_before);
  let f_name_wrapped = text_replace(f_name_before, from, suffix);
  let r = await function_wrap(f_name_before, f_name_wrapped);
  return r;
}
