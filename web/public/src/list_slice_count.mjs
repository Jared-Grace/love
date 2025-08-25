import {list_slice} from "./list_slice.mjs";
export function list_slice_count(list, index, count) {
  let sliced2 = list_slice(list, index, index + count);
  return sliced2;
}
