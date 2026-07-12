import { not_assert } from "./not_assert.mjs";
import { text_padded_is } from "./text_padded_is.mjs";
export function text_padded_not_is_assert(suffix, padding) {
  let p = text_padded_is(suffix, padding);
  not_assert(p);
}
