import { list_each_by } from "../../../love/public/src/list_each_by.mjs";
import { positive_is_assert } from "../../../love/public/src/positive_is_assert.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
export function list_chunk(list, chunk_size) {
  positive_is_assert(chunk_size);
  function lambda(la) {
    list_each_by(list, lambda, chunk_size);
    function lambda(position) {
      let sliced = list_slice_count(list, position, chunk_size);
      la(sliced);
    }
  }
  let chunks = list_adder(lambda);
  return chunks;
}
