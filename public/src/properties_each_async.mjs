import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export async function properties_each_async(lookup, lambda$key) {
  let properties = properties_get(lookup);
  await each_unordered_async(properties, lambda$key);
}
