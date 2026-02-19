import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { object_map_generic_async } from "../../../love/public/src/object_map_generic_async.mjs";
export async function object_map_unordered_async(object, lambda$value$key) {
  let each_lambda = list_map_unordered_async;
  return await object_map_generic_async(object, lambda$value$key, each_lambda);
}
