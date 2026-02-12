import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
export async function function_rename_replace_append(f_name_before, from, to) {
  let r = await function_rename_replace(f_name_before, from, to);
  return r;
}
