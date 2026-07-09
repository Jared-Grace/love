import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { at_least } from "../../../love/public/src/at_least.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_slices_size_generic(count_get, list, min) {
  function lambda3(la) {
    function lambda2(item, index) {
      let count = count_get();
      let slice = list_slice(list, index, text_combine(index, count));
      let z = list_size(slice);
      let al = at_least(z, min);
      if (al) {
        la(slice);
      }
    }
    each_index(list, lambda2);
  }
  let slices = list_adder(lambda3);
  return slices;
}
