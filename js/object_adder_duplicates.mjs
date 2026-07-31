import { object_adder_property_set_generic } from "./object_adder_property_set_generic.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { object_adder_generic } from "./object_adder_generic.mjs";
export function object_adder_duplicates(lambda$oad) {
  let result = object_adder_property_set_generic(property_set, lambda$oad);
  return result;
}
