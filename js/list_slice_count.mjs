import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
export function list_slice_count(list, index, count) {
  let end = add(index, count);
  let sliced = list_slice(list, index, end);
  return sliced;
}
