import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
export function list_slice_include(list, a, b) {
  let index_b = add(b, 1);
  let sliced = list_slice(list, a, index_b);
  return sliced;
}
