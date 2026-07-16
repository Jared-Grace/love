import { global_override } from "./global_override.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function override_with(fn, key, value, lambda) {
  let overrides = global_override(fn);
  let previous = property_get(overrides, key);
  property_set(overrides, key, value);
  try {
    let result = await lambda();
    return result;
  } finally {
    property_set(overrides, key, previous);
  }
}
