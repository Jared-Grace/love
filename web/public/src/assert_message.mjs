import { error } from "./error.mjs";
export function assert_message(b) {
  if (!b) {
    error();
  }
}
