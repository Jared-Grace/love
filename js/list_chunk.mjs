import { list_each_by } from "./list_each_by.mjs";
import { positive_is_assert_json } from "./positive_is_assert_json.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
export function list_chunk(list, chunk_size) {
  positive_is_assert_json(chunk_size, {
    hint: "chunk size should be a positive number of items per chunk",
  });
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
