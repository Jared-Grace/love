import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
export function list_remove_last_equal(item, expected_last) {
  let popped = list_remove_last(item);
  equal_assert(popped, expected_last);
}
