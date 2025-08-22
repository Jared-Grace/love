import { object_property_equals_lambda } from "./object_property_equals_lambda.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_property(list, property_name, property_value) {
  let filter = object_property_equals_lambda(property_name, property_value);
  let first = list_find(list, filter);
  return first;
}
