import { not } from "../../../love/public/src/not.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function assert_message(b, message) {
  if (not(b)) {
    error(message);
  }
}
