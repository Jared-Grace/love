import { property_equals_not } from "../../../karate_code/public/src/property_equals_not.mjs";
import { function_curryify_right_count } from "../../../love/public/src/function_curryify_right_count.mjs";
import { function_curryify_specify } from "../../../love/public/src/function_curryify_specify.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
export async function sandbox() {
  await function_delete_if_exists("property_equals_not_curried_right_2");
  let output = await function_curryify_right_count(f_name, 2);
  let r = await function_curryify_specify(property_equals_not.name, "1,3");
}
