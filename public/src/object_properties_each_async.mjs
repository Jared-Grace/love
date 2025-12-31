import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
export async function object_properties_each_async(lookup, lambda2) {
  let properties = object_properties(lookup);
  await each_unordered_async(properties, lambda2);
}
