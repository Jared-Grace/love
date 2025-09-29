import { object_property_equals_lambda } from "../../../love/public/src/object_property_equals_lambda.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_property(list, property_name, property_value) {
  let filter = object_property_equals_lambda(property_name, property_value);
  let filtered = list_filter(list, filter);
  return filtered;
}
