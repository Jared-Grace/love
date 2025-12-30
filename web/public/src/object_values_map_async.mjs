import { each_object_unordered_async } from "../../../love/public/src/each_object_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function object_values_map_async() {
  marker("1");
  async function lambda2() {}
  await each_object_unordered_async(object, lambda2);
}
