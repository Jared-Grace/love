import { text_is } from "./text_is.mjs";
import { assert_message_get } from "./assert_message_get.mjs";
export function text_is_assert_message_get(value, lambda) {
  let b = text_is(value);
  assert_message_get(b, lambda);
}
