import { marker } from "./marker.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
import { assert_message } from "./assert_message.mjs";
export function string_is_assert_message(value) {
  marker("1");
  let b = string_is(value);
  let v = assert_message(b);
  return v;
}
