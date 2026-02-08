import { text_is } from "../../../love/public/src/text_is.mjs";
import { assert_message } from "../../../love/public/src/assert_message.mjs";
export function string_is_assert_message(value, message) {
  let b = text_is(value);
  let v = assert_message(b, message);
  return v;
}
