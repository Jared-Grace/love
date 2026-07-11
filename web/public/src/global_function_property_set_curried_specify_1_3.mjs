import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
export function global_function_property_set_curried_specify_1_3(fn, value) {
  let r2 = function global_function_property_set_curried_specify_1_3_result(
    property_name,
  ) {
    let r = global_function_property_set(fn, property_name, value);
    return r;
  };
  return r2;
}
