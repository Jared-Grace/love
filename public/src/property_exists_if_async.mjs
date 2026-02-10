import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export async function property_exists_if_async(obj, property, lambda$value) {
  let e = property_exists(obj, property);
  if (e) {
    let value = object_property_get(obj, property);
    await lambda$value(value);
  }
}
