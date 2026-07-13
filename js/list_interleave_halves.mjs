import { list_size_half_ceil } from "./list_size_half_ceil.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_interleave_halves(list) {
  let half = list_size_half_ceil(list);
  let first = list_slice_count(list, 0, half);
  let second = list_skip(list, half);
  let second_size = list_size(second);
  function lambda2(la) {
    function lambda(item, index) {
      la(item);
      let paired = index < second_size;
      if (paired) {
        let other = list_get(second, index);
        la(other);
      }
    }
    each_index(first, lambda);
  }
  let result = list_adder(lambda2);
  return result;
}
