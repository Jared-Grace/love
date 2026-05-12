import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { negative_not_is_assert } from "../../../love/public/src/negative_not_is_assert.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_take_end_count_generic(list, count) {
  let size_get = list_size;
  integer_is_assert(count);
  let end = size_get(list);
  let c = end - count;
  negative_not_is_assert(c);
  return c;
}
