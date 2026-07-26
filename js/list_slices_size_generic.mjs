import { list_adder } from "./list_adder.mjs";
import { each_index } from "./each_index.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_slices_size_generic(count_get, list, min) {
  function lambda3(la) {
    function lambda2(item, index) {
      let count = count_get();
      let index_b = text_combine(index, count);
      let slice = list_slice(list, index, index_b);
      let z = list_size(slice);
      let al = greater_than_equal(z, min);
      if (al) {
        la(slice);
      }
    }
    each_index(list, lambda2);
  }
  let slices = list_adder(lambda3);
  return slices;
}
