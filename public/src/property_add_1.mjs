import { add_ } from "../../../love/public/src/add_1.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
export function property_add_(a, property) {
  property_transform(a, property, add_);
}
