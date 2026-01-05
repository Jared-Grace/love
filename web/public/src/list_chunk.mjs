import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_chunk(list, chunk_size) {
  let size = list_size(list);
  function lambda(la) {
    while (size > chunk_size) {}
  }
  let list2 = list_adder(lambda);
}
