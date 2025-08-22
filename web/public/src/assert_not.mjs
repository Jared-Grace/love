import { error } from "./error.mjs";
export function assert_not(b) {
  if (b) {
    error();
  }
}
