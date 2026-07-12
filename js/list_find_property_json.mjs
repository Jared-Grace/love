import { property_equals_json_lambda } from "./property_equals_json_lambda.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_property_json(list, property_name, property_value) {
  let filter = property_equals_json_lambda(property_name, property_value);
  let item = list_find(list, filter);
  return item;
}
