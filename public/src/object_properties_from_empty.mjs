import { marker } from "../../../love/public/src/marker.mjs";
import { object_properties_from } from "../../../love/public/src/object_properties_from.mjs";
export function object_properties_from_empty(o, properties) {
  marker("1");
  let r = object_properties_from({}, properties, o);
  return r;
}
