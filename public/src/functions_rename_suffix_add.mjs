import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_rename_suffix_add } from "../../../love/public/src/function_rename_suffix_add.mjs";
export async function functions_rename_suffix_add(
  f_name_befores_comma,
  suffix,
) {
  let split = text_split_comma(f_name_befores_comma);
  let r = await function_rename_suffix_add(split, suffix);
  return r;
}
