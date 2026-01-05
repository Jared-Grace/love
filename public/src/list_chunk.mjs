import { positive_is_assert } from "../../../love/public/src/positive_is_assert.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_chunk(list, chunk_size) {
  positive_is_assert(chunk_size);
  let size = list_size(list);
  let position = 0;
  function lambda(la) {
    while (position < chunk_size) {
      let sliced = list_slice(list3, a, b);
    }
  }
  let list2 = list_adder(lambda);
}
