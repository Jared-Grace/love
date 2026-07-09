import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
export function list_remove_last_equal(list, expected_last) {
  let popped = list_remove_last(list);
  equal_assert(popped, expected_last);
}
