import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function object_property_single_value(object) {
  let properties = properties_get(object);
  let only = list_single(properties);
  let value = property_get(object, only);
  return value;
}
