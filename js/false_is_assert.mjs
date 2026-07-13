import { false_is } from "./false_is.mjs";
import { assert_message } from "./assert_message.mjs";
export function false_is_assert(b) {
  let ti = false_is(b);
  assert_message(
    ti,
    "This value was expected to be false. Would you like to check where it's set?",
  );
}
