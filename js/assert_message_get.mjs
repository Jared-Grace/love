import { not } from "./not.mjs";
import { error } from "./error.mjs";
export function assert_message_get(b, lambda) {
  if (not(b)) {
    let message = lambda();
    error(message);
  }
}
