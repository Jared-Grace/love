import { object_property_subtract_1 } from "../../../love/public/src/object_property_subtract_1.mjs";
import { object_property_add_1 } from "../../../love/public/src/object_property_add_1.mjs";
export function object_property_add_subtract_1(a, property, inner) {
  object_property_add_1(a, property);
  inner();
  object_property_subtract_1(a, property);
}
