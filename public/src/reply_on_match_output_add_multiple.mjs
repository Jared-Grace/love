import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_on_match_output_add_multiple(possibility, items) {
  marker("1");
  let outputs = object_property_get(possibility, "outputs");
  list_add_multiple(outputs, items);
}
