import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
import { function_curryify } from "../../../love/public/src/function_curryify.mjs";
export async function sandbox() {
  await function_delete_if_exists(f_name);
  await function_curryify("text_match_ordered");
}
