import { not } from "../../../love/public/src/not.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function object_property_exists_not(object, property_name) {
  let e = property_exists(object, property_name);
  let ne = not(e);
  return ne;
}
