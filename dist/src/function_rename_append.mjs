import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { function_rename_suffix_add_generic } from "../../../love/public/src/function_rename_suffix_add_generic.mjs";
export async function function_rename_append(f_name_before, suffix) {
  let fn = text_combine;
  let v = await function_rename_suffix_add_generic(f_name_before, suffix, fn);
  return v;
}
