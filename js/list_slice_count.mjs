import { list_slice } from "./list_slice.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_slice_count(list, index, count) {
  let sliced = list_slice(list, index, text_combine(index, count));
  return sliced;
}
