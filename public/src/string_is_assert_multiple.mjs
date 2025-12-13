import { each } from "../../../love/public/src/each.mjs";
import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
export function string_is_assert_multiple(items) {
  function lambda2(item) {
    string_is_assert(item);
  }
  each(items, lambda2);
}
