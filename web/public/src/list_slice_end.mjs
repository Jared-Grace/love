import { negative_not_is } from "../../../love/public/src/negative_not_is.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_slice_end(list, count) {
  let end = list_size(list);
  let start = end - count;
  let nn = negative_not_is(start);
  if (start < 0) {
    start = 0;
  }
  let result = list_slice(list, start, end);
  return result;
}
