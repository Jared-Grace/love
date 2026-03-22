import { range } from "../../../love/public/src/range.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_range(list) {
  let size = list_size(list);
  let r = range(size);
  return r;
}
