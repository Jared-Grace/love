import { assert_not } from "../../../love/public/src/assert_not.mjs";
import { text_padded_is } from "../../../love/public/src/text_padded_is.mjs";
export function string_padded_not_is_assert(suffix, padding) {
  let p = text_padded_is(suffix, padding);
  assert_not(p);
}
