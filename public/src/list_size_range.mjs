import { range } from "../../../love/public/src/range.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_range(start) {
  let size = list_size(start);
  let r = range(size);
  return r;
}
