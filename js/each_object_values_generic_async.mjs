import { object_values_map_list_unordered_async } from "./object_values_map_list_unordered_async.mjs";
export async function each_object_values_generic_async(
  object,
  lambda$value$key,
  oad,
) {
  async function lambda(value, key) {
    let mapped = await lambda$value$key(value, key);
    oad(key, mapped);
  }
  await object_values_map_list_unordered_async(object, lambda);
}
