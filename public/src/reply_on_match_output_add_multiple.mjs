import { marker } from "../../../love/public/src/marker.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_on_match_output_add_multiple(possibility, item) {
  marker("1");
  let outputs = object_property_get(possibility, "outputs");
  list_add(outputs, item);
}
