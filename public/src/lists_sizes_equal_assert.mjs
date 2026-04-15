import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
export function lists_sizes_equal_assert(lists) {
  let a = lists_sizes_equal(lists);
  function lambda2() {
    let r = {
      lists,
    };
    return r;
  }
  assert_json_get(a, lambda2);
}
