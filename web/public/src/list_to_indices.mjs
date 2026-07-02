import { range } from "../../../love/public/src/range.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_to_indices(item3) {
  let size = list_size(item3);
  let r = range(size);
  return r;
}
