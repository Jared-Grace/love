import { marker } from "../../../love/public/src/marker.mjs";
export function object_adder_generic(fn_set) {
  let result = {};
  let oa = function lambda(key, value) {
    fn_set(result, key, value);
  };
  let r = {
    oa,
    result,
  };
  return r;
}
