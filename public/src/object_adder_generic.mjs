import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
export function object_adder_generic() {
  let result = {};
  let oa = function lambda(key, value) {
    object_property_set_exists_not(result, key, value);
  };
  let v = {
    oa,
    result,
  };
  return v;
}
