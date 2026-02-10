import { function_curryify_choose } from "../../../love/public/src/function_curryify_choose.mjs";
export async function function_curryify_right(f_name) {
  let r = await function_curryify_choose(f_name, 0);
  return r;
}
