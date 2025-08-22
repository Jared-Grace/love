import { object_property_equals } from "./object_property_equals.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_exists_equals(path, in_progress, value) {
  let v =
    object_property_exists(path) &&
    object_property_equals(in_progress, path, value);
  return v;
}
