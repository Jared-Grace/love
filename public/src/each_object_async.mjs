import { object_map_generic_async } from "../../../love/public/src/object_map_generic_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function each_object_async(object, lambda$value$key) {
  let each_lambda = each_async;
  await object_map_generic_async(object, lambda$value$key, each_lambda);
}
