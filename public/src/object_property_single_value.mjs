import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function object_property_single_value(picked) {
  let properties = properties_get(picked);
  let only = list_single(properties);
  let value3 = property_get(picked, only);
  return value3;
}
