import { property_initialize_list } from "../../../love/public/src/property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
export function lookup_adder(fn_set) {
  let result = {};
  let la = function lambda(key, value) {
    let list = property_initialize_list(result, key);
    list_add(list, value);
  };
  let r = {
    la,
    result,
  };
  return r;
}
