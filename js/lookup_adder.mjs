import { property_initialize_list_add } from "./property_initialize_list_add.mjs";
export function lookup_adder(lambda$la) {
  let result = {};
  function lambda(key, value) {
    property_initialize_list_add(result, key, value);
  }
  lambda$la(lambda);
  return result;
}
