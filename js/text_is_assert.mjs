import { assert_message } from "./assert_message.mjs";
import { text_is } from "./text_is.mjs";
export function text_is_assert(value) {
  let b = text_is(value);
  assert_message(
    b,
    "This value was expected to be text. Would you like to check its type?",
  );
}
