import { assert_message } from "./assert_message.mjs";
import { null_is } from "./null_is.mjs";
export function null_is_assert(value) {
  let n = null_is(value);
  assert_message(
    n,
    "This value was hoping to be null, but it's holding something else. Would you like to check where it gets set?",
  );
}
