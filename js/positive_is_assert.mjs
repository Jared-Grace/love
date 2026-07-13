import { assert_message } from "./assert_message.mjs";
import { positive_is } from "./positive_is.mjs";
export function positive_is_assert(n) {
  let p = positive_is(n);
  assert_message(p, "This value was expected to be positive. Would you like to check how it was computed?");
}
