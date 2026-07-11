import { subtract_ } from "../../../love/public/src/subtract_1.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
export function property_subtract_(a, property) {
  property_transform(a, property, subtract_);
}
