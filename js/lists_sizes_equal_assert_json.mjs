import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function lists_sizes_equal_assert_json(lists, json) {
  let a = lists_sizes_equal(lists);
  assert_json(a, {
    lists,
    json,
  });
}
