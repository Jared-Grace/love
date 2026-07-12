import { text_empty_not_is_assert } from "./text_empty_not_is_assert.mjs";
import { text_is_assert } from "./text_is_assert.mjs";
export function text_and_empty_not_is_assert(name) {
  text_is_assert(name);
  text_empty_not_is_assert(name);
}
