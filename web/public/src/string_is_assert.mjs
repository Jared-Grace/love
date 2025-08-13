import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
export function string_is_assert(value) {
  let b = string_is(value);
  return assert(b);
}
