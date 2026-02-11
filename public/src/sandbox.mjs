import { function_curryify_overwrite } from "../../../love/public/src/function_curryify_overwrite.mjs";
export async function sandbox() {
  let f_name = "text_match_ordered";
  await function_curryify_overwrite(f_name);
}
