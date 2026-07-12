import { range } from "./range.mjs";
import { list_size } from "./list_size.mjs";
export function list_to_indices(list) {
  let size = list_size(list);
  let indices = range(size);
  return indices;
}
