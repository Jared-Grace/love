import { negative_is } from "./negative_is.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_slice_end_try(list, count) {
  let end = list_size(list);
  let start = subtract(end, count);
  ("asking for more items than exist is the ordinary case, and it means take all of them, so a start before the beginning is the beginning");
  let before = negative_is(start);
  if (before) {
    start = 0;
  }
  let result = list_slice(list, start, end);
  return result;
}
