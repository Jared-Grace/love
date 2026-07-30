import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function lists_sizes_equal_assert(lists) {
  let a = lists_sizes_equal(lists);
  let r = {
    lists,
  };
  assert_json(a, r);
}
