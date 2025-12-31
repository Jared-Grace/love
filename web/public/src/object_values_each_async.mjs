import { object_values_each_generic_async } from "../../../love/public/src/object_values_each_generic_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function object_values_each_async(lambda$value$key, oad, object) {
  marker("1");
  return await object_values_each_generic_async(lambda$value$key, oad, object);
}
