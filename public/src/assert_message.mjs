import { error } from "./error.mjs";
export function assert_message(b, message) {
  if (!b) {
    error(message);
  }
}
