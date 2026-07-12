import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export async function property_transform_async(o, property, lambda$value) {
  let value = property_get(o, property);
  value = await lambda$value(value);
  property_set(o, property, value);
  return value;
}
