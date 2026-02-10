import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export function property_from(to, property_name, from) {
  let value = object_property_get(from, property_name);
  object_property_set(to, property_name, value);
}
