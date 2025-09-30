import { assert } from "../../../love/public/src/assert.mjs";
import { string_is } from "../../../love/public/src/string_is.mjs";
export function string_is_assert(value) {
  let b = string_is(value);
  assert(b);
}
