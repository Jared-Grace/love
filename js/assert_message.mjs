import { not } from "./not.mjs";
import { error } from "./error.mjs";
export function assert_message(b, message) {
  if (not(b)) {
    error(message);
  }
}
