import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
export async function function_copy_open_generic_args(f_name_old, f_name_new) {
  let r = await function_copy_open(f_name_old, f_name_new);
  return r;
}
