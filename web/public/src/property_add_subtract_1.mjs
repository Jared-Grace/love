import { property_subtract_ } from "../../../love/public/src/property_subtract_1.mjs";
import { property_add_ } from "../../../love/public/src/property_add_1.mjs";
export function property_add_subtract_(a, property, inner) {
  property_add_(a, property);
  inner();
  property_subtract_(a, property);
}
