import { object_property_equals_lambda } from "./object_property_equals_lambda.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_property(list, property_name, property_value) {
  let filter = object_property_equals_lambda(property_name, property_value);
  let result = list_filter(list, filter);
  return result;
}
