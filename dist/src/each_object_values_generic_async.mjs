import { object_map_unordered_async } from "../../../love/public/src/object_map_unordered_async.mjs";
export async function each_object_values_generic_async(
  object,
  lambda$value$key,
  oad,
) {
  async function lambda2(value, key) {
    let mapped = await lambda$value$key(value, key);
    oad(key, mapped);
  }
  await object_map_unordered_async(object, lambda2);
}
