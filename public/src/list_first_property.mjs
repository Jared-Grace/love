import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_first_property(lessons, property_name) {
  let first = list_first(lessons);
  let value = property_get(first, property_name);
  return value;
}
