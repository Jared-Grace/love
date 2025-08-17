import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
export function string_is_assert_message(value) {
  let b = string_is(value);
  let v = assert(b);
  return v;
}
