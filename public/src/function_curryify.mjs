import { function_curryify_choose } from "../../../love/public/src/function_curryify_choose.mjs";
export async function function_curryify(f_name) {
  let output = await function_curryify_choose(f_name, 0);
  return output;
}
