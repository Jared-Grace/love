import { assert_message } from "./assert_message.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_empty_not_is_assert(s) {
  let ne = text_empty_not_is(s);
  assert_message(
    ne,
    "This text was expected to be non-empty. Would you like to check where it comes from?",
  );
}
