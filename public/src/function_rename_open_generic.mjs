import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_open_generic(
  f_name_before,
  f_name_after,
) {
  let r = await function_rename_open(f_name_before, f_name_after);
  return r;
}
