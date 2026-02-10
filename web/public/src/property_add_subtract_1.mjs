import { property_subtract_1 } from "../../../love/public/src/property_subtract_1.mjs";
import { property_add_1 } from "../../../love/public/src/property_add_1.mjs";
export function property_add_subtract_1(a, property, inner) {
  property_add_1(a, property);
  inner();
  property_subtract_1(a, property);
}
