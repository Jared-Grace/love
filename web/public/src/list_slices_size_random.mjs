import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { list_join_space_nb } from "../../../love/public/src/list_join_space_nb.mjs";
import { at_least } from "../../../love/public/src/at_least.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function list_slices_size_random(list, min, max) {
  let count_get = integer_random;
  function lambda3(la) {
    function lambda2(word, index) {
      let count = count_get(min, max);
      let slice = list_slice(list, index, index + count);
      let z = list_size(slice);
      let al = at_least(z, min);
      if (al) {
        let joined = list_join_space_nb(slice);
        let split = text_split_empty(joined);
        la(split);
      }
    }
    each_index(list, lambda2);
  }
  let slices = list_adder(lambda3);
  return slices;
}
