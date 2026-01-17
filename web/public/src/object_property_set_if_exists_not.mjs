import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
export function object_property_set_if_exists_not(a, p, value) {
  let n = object_property_exists_not(a, p);
  if (n) {
    object_property_set(a, p, value);
  }
}
