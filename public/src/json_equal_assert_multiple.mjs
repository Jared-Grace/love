import { each } from "../../../love/public/src/each.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
export function json_equal_assert_multiple(expected, list) {
  function lambda(item) {
    json_equal_assert(item, expected);
  }
  each(list, lambda);
}
