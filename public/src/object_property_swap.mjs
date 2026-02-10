import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function object_property_swap(n, p1, p2) {
  let v1 = property_get(n, p1);
  let v2 = property_get(n, p2);
  object_property_set(n, p1, v2);
  object_property_set(n, p2, v1);
}
