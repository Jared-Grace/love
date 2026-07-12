import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { object_adder_generic } from "./object_adder_generic.mjs";
export function object_adder_duplicates(lambda$oad) {
  let v = object_adder_generic(property_set);
  let result = property_get(v, "result");
  let oa = property_get(v, "oa");
  lambda$oad(oa);
  return result;
}
