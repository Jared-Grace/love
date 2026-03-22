import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_replace(f_name_before, before, after) {
  f_name_before = await function_name_unalias_only(f_name_before);
  let f_name_wrapped = text_replace(f_name_before, before, after);
  let r = await function_wrap(f_name_before, f_name_wrapped);
  return r;
}
