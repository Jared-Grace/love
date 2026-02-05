import { object_properties_from } from "../../../love/public/src/object_properties_from.mjs";
export function object_properties_from_empty(o, properties) {
  let r = object_properties_from({}, properties, o);
  return r;
}
