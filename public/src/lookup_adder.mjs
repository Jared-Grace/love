import { property_initialize_list } from "../../../love/public/src/property_initialize_list.mjs";
export function lookup_adder(fn_set) {
  let result = {};
  let oa = function lambda(key, value) {
    let value2 = property_initialize_list(object, property_name);
    fn_set(result, key, value);
  };
  let r = {
    oa,
    result,
  };
  return r;
}
