import { object_property_equals_json_lambda } from "../../../love/public/src/object_property_equals_json_lambda.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_property_json(list, property_name, property_value) {
  marker("1");
  let filter = object_property_equals_json_lambda(
    property_name,
    property_value,
  );
  let item = list_find(list, filter);
  return item;
}
