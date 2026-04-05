import { function_curryify_specify } from "../../../karate_code/public/src/function_curryify_specify.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
export async function sandbox() {
  await function_delete_if_exists(f_name);
  let r = await function_curryify_specify(f_name2, positions_comma);
}
