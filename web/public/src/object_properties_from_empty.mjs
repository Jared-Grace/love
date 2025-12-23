import { marker } from "../../../love/public/src/marker.mjs";
import { object_properties_from } from "../../../love/public/src/object_properties_from.mjs";
export function object_properties_from_empty(item2, properties) {
  marker("1");
  let to = object_properties_from({}, properties, item2);
  return to;
}
