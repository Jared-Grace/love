import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export async function object_property_exists_if_async(
  obj,
  property,
  lambda$value,
) {
  marker("1");
  let e = object_property_exists(obj, property);
  if (e) {
    let value = object_property_get(obj, property);
    await lambda$value(value);
  }
}
