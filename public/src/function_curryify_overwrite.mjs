import { function_curryify } from "../../../love/public/src/function_curryify.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
export async function function_curryify_overwrite(f_name) {
  let combined = function_curryify_generic_name(f_name);
  await function_delete_if_exists(combined);
  await function_curryify(f_name);
}
