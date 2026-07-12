import { text_is } from "./text_is.mjs";
import { assert_message } from "./assert_message.mjs";
export function text_is_assert_message(value, message) {
  let b = text_is(value);
  let v = assert_message(b, message);
  return v;
}
