import { text_empty_not_is_assert } from "../../../love/public/src/text_empty_not_is_assert.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
export function text_and_empty_not_is_assert(name) {
  text_is_assert(name);
  text_empty_not_is_assert(name);
}
