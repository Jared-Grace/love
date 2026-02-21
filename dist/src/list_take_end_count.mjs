import { negative_not_is_assert } from "../../../love/public/src/negative_not_is_assert.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "./list_take.mjs";
export function list_take_end_count(list, count) {
  let end = list_size(list);
  let c = end - count;
  negative_not_is_assert(c);
  let result = list_take(list, c);
  return result;
}
