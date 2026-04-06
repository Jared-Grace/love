import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { negative_not_is_assert } from "../../../love/public/src/negative_not_is_assert.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_take_end_count_generic(list, count) {
  let end = list_size(list);
  integer_is_assert(count);
  let c = end - count;
  negative_not_is_assert(c);
  return c;
}
