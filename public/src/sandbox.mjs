import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
import { function_curryify } from "../../../love/public/src/function_curryify.mjs";
export async function sandbox() {
  let f_name = "text_match_ordered";
  let combined = function_curryify_generic_name(f_name);
  await function_delete_if_exists(combined);
  await function_curryify(f_name);
}
