import { each_object_unordered_async } from "./each_object_unordered_async.mjs";
export async function object_values_map_generic_async(
  object,
  lambda$value$key,
  oad,
) {
  async function lambda(value, key) {
    let mapped = await lambda$value$key(value, key);
    oad(key, mapped);
  }
  await each_object_unordered_async(object, lambda);
}
