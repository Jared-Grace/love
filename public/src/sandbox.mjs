import { function_delete_unused } from "../../../karate_code/public/src/function_delete_unused.mjs";
import { equal_not_curried_right } from "../../../karate_code/public/src/equal_not_curried_right.mjs";
export async function sandbox() {
  let s = equal_not_curried_right.name;
  let result = await function_delete_unused(s);
  return result;
}
