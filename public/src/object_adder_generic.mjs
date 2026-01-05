import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
export function object_adder_generic(fn_set) {
  marker("1");
  let result = {};
  let oa = function lambda(key, value) {
    object_property_set_exists_not(result, key, value);
  };
  let r = {
    oa,
    result,
  };
  return r;
}
