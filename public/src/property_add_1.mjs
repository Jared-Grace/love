import { add_1 } from "../../../love/public/src/add_1.mjs";
import { object_property_change } from "../../../love/public/src/object_property_change.mjs";
export function property_add_1(a, property) {
  object_property_change(a, property, add_1);
}
