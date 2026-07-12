import { function_transform_curried_right } from "./function_transform_curried_right.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function functions_transform_list(list, lambda$ast) {
  let lambda = await function_transform_curried_right(lambda$ast);
  let waited = await list_map_unordered_async(list, lambda);
  return waited;
}
