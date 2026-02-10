import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_adder_generic } from "../../../love/public/src/object_adder_generic.mjs";
export async function object_adder_async(lambda$oad) {
  let v = object_adder_generic(object_property_set_exists_not);
  let result = property_get(v, "result");
  let oa = property_get(v, "oa");
  await lambda$oad(oa);
  return result;
}
