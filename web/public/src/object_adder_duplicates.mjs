import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_adder_generic } from "../../../love/public/src/object_adder_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function object_adder_duplicates(lambda$oad) {
  marker("1");
  let v = object_adder_generic(object_property_set);
  let result = object_property_get(v, "result");
  let oa = object_property_get(v, "oa");
  lambda$oad(oa);
  return result;
}
