import { range } from "../../../love/public/src/range.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_to_indices(list) {
  let size = list_size(list);
  let indices = range(size);
  return indices;
}
