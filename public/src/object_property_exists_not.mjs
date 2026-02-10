import { not } from "../../../love/public/src/not.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function object_property_exists_not(object, property_name) {
  let e = object_property_exists(object, property_name);
  let ne = not(e);
  return ne;
}
