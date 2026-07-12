import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
export function property_exists_not(object, property_name) {
  let e = property_exists(object, property_name);
  let ne = not(e);
  return ne;
}
