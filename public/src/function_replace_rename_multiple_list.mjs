import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_replace_rename_multiple_generic } from "../../../love/public/src/function_replace_rename_multiple_generic.mjs";
export async function function_replace_rename_multiple_list(
  f_names_comma,
  from,
  to,
) {
  let split = text_split_comma(t);
  let r = await function_replace_rename_multiple_generic(f_names, from, to);
  return r;
}
