import { each } from "../../../love/public/src/each.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
export function text_is_assert_multiple(items) {
  function lambda2(item) {
    text_is_assert(item);
  }
  each(items, lambda2);
}
