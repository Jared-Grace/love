import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function object_adder(lambda$oad) {
  marker("1");
  let reuslt = {};
  function oa(key, value) {
    object_property_set_exists_not(reuslt, key, value);
  }
  lambda$oad(oa);
  return reuslt;
}
