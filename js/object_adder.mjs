import { object_adder_property_set_generic } from "./object_adder_property_set_generic.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { object_adder_generic } from "./object_adder_generic.mjs";
export function object_adder(lambda$oad) {
  let result = object_adder_property_set_generic(
    property_set_exists_not,
    lambda$oad,
  );
  return result;
}
