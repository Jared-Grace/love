import { add_1 } from "./add_1.mjs";
import { property_transform } from "./property_transform.mjs";
export function property_add_1(a, property) {
  property_transform(a, property, add_1);
}
