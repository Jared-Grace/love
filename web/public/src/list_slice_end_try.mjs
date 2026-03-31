import { negative_not_ensure } from "../../../love/public/src/negative_not_ensure.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_slice_end_try(list, count) {
  let end = list_size(list);
  let start = end - count;
  start = negative_not_ensure(start);
  let result = list_slice(list, start, end);
  return result;
}
