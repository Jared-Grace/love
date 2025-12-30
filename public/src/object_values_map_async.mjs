import { each_object_unordered_async } from "../../../love/public/src/each_object_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function object_values_map_async() {
  marker("1");
  await each_object_unordered_async(object, async function lambda2() {});
}
