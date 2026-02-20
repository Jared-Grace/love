import { not_assert } from "../../../love/public/src/not_assert.mjs";
import { text_padded_is } from "../../../love/public/src/text_padded_is.mjs";
export function text_padded_not_is_assert(suffix, padding) {
  let p = text_padded_is(suffix, padding);
  not_assert(p);
}
