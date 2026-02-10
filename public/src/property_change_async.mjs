import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function property_change_async(o, property, lambda$value) {
  let value = object_property_get(o, property);
  value = await lambda$value(value);
  object_property_set(o, property, value);
  return value;
}
