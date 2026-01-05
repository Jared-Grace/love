import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_equals_lambda } from "../../../love/public/src/object_property_equals_lambda.mjs";
export function list_find_property_or_null(
  list,
  property_name,
  property_value,
) {
  marker("1");
  let filter = object_property_equals_lambda(property_name, property_value);
  let item = list_filter(list, filter);
  if (false) {
  }
  return item;
}
