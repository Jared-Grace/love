import { negative_not_ensure } from "./negative_not_ensure.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_slice_end_try(list, count) {
  let end = list_size(list);
  let start = subtract(end, count);
  start = negative_not_ensure(start);
  let result = list_slice(list, start, end);
  return result;
}
