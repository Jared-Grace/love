import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
export async function function_rename_open(f_name_before, f_name_after) {
  f_name_before = await function_rename(f_name_before, f_name_after);
  await function_open(f_name_after);
  return f_name_after;
}
