import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { object_property_change } from "../../../love/public/src/object_property_change.mjs";
export function object_property_subtract_1(a, property) {
  object_property_change(a, property, subtract_1);
}
