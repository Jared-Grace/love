import { assert_message } from "./assert_message.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function null_not_is_assert(a) {
  let nn = null_not_is(a);
  assert_message(nn, "This value was expected not to be null. Would you like to check where it should have been set?");
}
