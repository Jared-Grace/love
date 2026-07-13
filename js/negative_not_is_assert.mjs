import { assert_message } from "./assert_message.mjs";
import { negative_not_is } from "./negative_not_is.mjs";
export function negative_not_is_assert(start) {
  let nn = negative_not_is(start);
  assert_message(
    nn,
    "This value was expected not to be negative. Would you like to check how it was computed?",
  );
}
