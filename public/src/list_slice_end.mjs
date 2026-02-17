import { negative_not_is_assert } from "../../../love/public/src/negative_not_is_assert.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_slice_end(list, count) {
  let end = list_size(list);
  let start = end - count;
  negative_not_is_assert(start);
  if (start < 0) {
    start = 0;
  }
  let result = list_slice(list, start, end);
  return result;
}
