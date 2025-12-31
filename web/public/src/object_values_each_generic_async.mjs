import { marker } from "../../../love/public/src/marker.mjs";
import { each_object_unordered_async } from "../../../love/public/src/each_object_unordered_async.mjs";
export async function object_values_each_generic_async(
  lambda$value$key,
  oad,
  object,
) {
  marker("1");
  async function lambda2(value, key) {
    let mapped = await lambda$value$key(value, key);
    oad(key, mapped);
  }
  await each_object_unordered_async(object, lambda2);
}
