import { function_curryify_choose } from "../../../love/public/src/function_curryify_choose.mjs";
export async function function_curryify_right(f_name, index_text) {
  let r = await function_curryify_choose(f_name, index_text);
  return r;
}
