import { function_transform_curried_right } from "../../../love/public/src/function_transform_curried_right.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function functions_transform_list(lambda$ast, list) {
  let lambda2 = await function_transform_curried_right(lambda$ast);
  let waited = await list_map_unordered_async(list, lambda2);
  return waited;
}
