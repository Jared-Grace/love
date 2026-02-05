import { not } from "../../../love/public/src/not.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function assert_message_get(b, lambda) {
  if (not(b)) {
    let message = lambda();
    error(message);
  }
}
