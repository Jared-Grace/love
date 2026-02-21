import { add_1 } from "../../../love/public/src/add_1.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
export function property_add_1(a, property) {
  property_change(a, property, add_1);
}
