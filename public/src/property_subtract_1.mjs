import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
export function property_subtract_1(a, property) {
  property_change(a, property, subtract_1);
}
