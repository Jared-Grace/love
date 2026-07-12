import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export function property_swap(object, property_name_a, property_name_b) {
  let a = property_get(object, property_name_a);
  let b = property_get(object, property_name_b);
  property_set(object, property_name_a, b);
  property_set(object, property_name_b, a);
}
