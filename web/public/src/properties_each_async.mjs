import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
export async function properties_each_async(lookup, lambda$key) {
  let properties = object_properties_get(lookup);
  await each_unordered_async(properties, lambda$key);
}
