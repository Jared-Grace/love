import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { positive_is_assert } from "../../../love/public/src/positive_is_assert.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_chunk(list, chunk_size) {
  positive_is_assert(chunk_size);
  let size = list_size(list);
  function lambda(la) {
    let position = 0;
    while (list_index_is(position)) {
      lambda();
      position += chunk_size;
    }
    function lambda() {
      let sliced = list_slice(list, position, chunk_size);
      la(sliced);
    }
  }
  let chunks = list_adder(lambda);
  return chunks;
}
