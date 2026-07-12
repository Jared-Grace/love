import { subtract_1 } from "./subtract_1.mjs";
import { property_transform } from "./property_transform.mjs";
export function property_subtract_1(a, property) {
  property_transform(a, property, subtract_1);
}
