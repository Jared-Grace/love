import { property_get } from "./property_get.mjs";
import { integer_is_assert } from "./integer_is_assert.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_range_index } from "./each_range_index.mjs";
export function storage_local_keys_browser() {
  function lambda(la) {
    function lambda2(i) {
      let key = localStorage.key(i);
      la(key);
    }
    let size = property_get(localStorage, "length");
    integer_is_assert(size);
    each_range_index(size, lambda2);
  }
  let keys = list_adder(lambda);
  return keys;
}
