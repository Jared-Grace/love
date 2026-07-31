import { object_adder_property_set_generic } from "./object_adder_property_set_generic.mjs";
import { property_set } from "./property_set.mjs";
export function object_adder_duplicates(lambda$oad) {
  let result = object_adder_property_set_generic(property_set, lambda$oad);
  return result;
}
