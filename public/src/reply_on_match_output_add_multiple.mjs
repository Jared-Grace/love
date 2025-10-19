import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_on_match_output_add_multiple(possibility, items) {
  marker("1");
  const property_name = "outputs";
  let outputs = object_property_get(possibility, property_name);
  list_add_multiple(outputs, items);
}
