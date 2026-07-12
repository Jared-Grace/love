import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
export function list_first_property(lessons, property_name) {
  let first = list_first(lessons);
  let value = property_get(first, property_name);
  return value;
}
