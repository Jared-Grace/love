import { function_rename_suffix_add } from "../../../love/public/src/function_rename_suffix_add.mjs";
export async function functions_rename_suffix_add(f_name_before, suffix) {
  let r = await function_rename_suffix_add(f_name_before, suffix);
  return r;
}
