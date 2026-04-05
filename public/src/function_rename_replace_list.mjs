import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename_replace_curried_right_2 } from "../../../love/public/src/function_rename_replace_curried_right_2.mjs";
export async function function_rename_replace_list(from, to, filtered) {
  let c = function_rename_replace_curried_right_2(from, to);
  await each_async(filtered, c);
}
