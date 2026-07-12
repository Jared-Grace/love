import { object_map_generic_async } from "./object_map_generic_async.mjs";
import { each_async } from "./each_async.mjs";
export async function object_map_async(object, lambda$value$key) {
  let each_lambda = each_async;
  await object_map_generic_async(object, lambda$value$key, each_lambda);
}
