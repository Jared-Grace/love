import { assert_message } from "./assert_message.mjs";
import { true_is } from "./true_is.mjs";
export function true_is_assert(enabled) {
  let ti = true_is(enabled);
  assert_message(ti, "This value was expected to be true. Would you like to check where it's set?");
}
